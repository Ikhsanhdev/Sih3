using Sih3.Models;
using Sih3.ViewModels;
using Dapper;
using Npgsql;
using Serilog;
using Sih3.Models.Datatables;
using Sih3.Models.Customs;
using System.Globalization;
using Sih3.Helpers;

namespace Sih3.Repositories;

public interface IArticleRepository
{
    Task<ResponseWrapper> SaveAsync(ArticleVM article);
    Task<(IReadOnlyList<dynamic>, int)> GetDataArticle(JqueryDataTableRequest request);
    Task<bool> DeleteArticleAsync(Guid id);
    Task<ArticleVM> GetArticleByIdAsync(Guid id);
}

public class ArticleRepository : IArticleRepository
{
    private readonly string _connectionString;
    public ArticleRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection") ?? "";
    }

    public async Task<ArticleVM> GetArticleByIdAsync(Guid id)
    {
        const string query = @"SELECT 
            id, 
            title, 
            description, 
            author, 
            img_url, 
            category::text AS category, 
            slug, 
            created_at, 
            updated_at,
            deleted_at
        FROM articles 
        WHERE id = @Id";

        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var article = await connection.QuerySingleOrDefaultAsync<ArticleVM>(query, new { Id = id });
                return article;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching article: {ex.Message}");
            return null;
        }
    }

    public async Task<ResponseWrapper> SaveAsync(ArticleVM article)
    {
        var result = new ResponseWrapper();
        try
        {
            string query = "";
            string status = "Tambah";
            Guid categoryGuid;

            // Validasi & konversi category string ke Guid
            if (!Guid.TryParse(article.category, out categoryGuid))
            {
                result.Code = 400;
                result.Message = "Kategori tidak valid.";
                return result;
            }

            // Tambah data
            if (article.id == Guid.Empty)
            {
                article.id = Guid.NewGuid(); // Buat ID baru
                article.created_at = DateTime.ParseExact(
                    DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                    "yyyy-MM-dd HH:mm:ss",
                    CultureInfo.InvariantCulture
                );
                article.author = ClaimIdentity.Username;

                query = @"
                    INSERT INTO articles (id, title, description, author, img_url, category, created_at, slug)
                    VALUES (@id, @title, @description, @author,
                            @img_url, @category, @created_at,
                            LOWER(REPLACE(@title, ' ', '-')))
                ";

                var param = new
                {
                    article.id,
                    article.title,
                    article.description,
                    article.author,
                    article.img_url,
                    category = categoryGuid,
                    article.created_at
                };

                using var connection = new NpgsqlConnection(_connectionString);
                await connection.ExecuteAsync(query, param);
            }
            else // Update data
            {
                status = "Memperbarui";
                article.updated_at = DateTime.ParseExact(
                    DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                    "yyyy-MM-dd HH:mm:ss",
                    CultureInfo.InvariantCulture
                );
                article.author = ClaimIdentity.Username;

                query = @"
                    UPDATE articles SET
                        title = @title,
                        description = @description,
                        author = @author,
                        img_url = @img_url,
                        category = @category,
                        updated_at = @updated_at
                    WHERE id = @id";

                var param = new
                {
                    article.id,
                    article.title,
                    article.description,
                    article.author,
                    article.img_url,
                    category = categoryGuid,
                    article.updated_at
                };

                using var connection = new NpgsqlConnection(_connectionString);
                await connection.ExecuteAsync(query, param);
            }

            result.Code = 200;
            result.Message = $"{status} data berhasil";
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error saving article: {ex.Message}");
            result.Code = 500;
            result.Message = "Terjadi kesalahan saat menyimpan data.";
        }

        return result;
    }

    public async Task<(IReadOnlyList<dynamic>, int)> GetDataArticle(JqueryDataTableRequest request)
    {
        try
        {
            using var connection = new NpgsqlConnection(_connectionString);
            List<dynamic> result = new List<dynamic>();

            var baseQuery = @"
                SELECT
                    ar.id,
                    ar.title,
                    ar.author,
                    c.category,
                    CASE 
                        WHEN ar.deleted_at IS NULL THEN 'Active'
                        ELSE 'Non Active'
                    END AS status,
                    GREATEST(
                        COALESCE(ar.created_at, '1970-01-01'),
                        COALESCE(ar.updated_at, '1970-01-01'),
                        COALESCE(ar.deleted_at, '1970-01-01')
                    ) AS last_update
                FROM articles AS ar
                LEFT JOIN category AS c ON ar.category = c.id";

            var parameters = new DynamicParameters();
            var whereConditions = new List<string>();

            // Filter pencarian
            if (!string.IsNullOrEmpty(request.SearchValue))
            {
                var search = request.SearchValue.Replace("'", "''").ToLower();
                whereConditions.Add(@"
                    (LOWER(ar.title) LIKE @SearchValue OR
                    LOWER(ar.author) LIKE @SearchValue OR
                    LOWER(ar.description) LIKE @SearchValue OR
                    LOWER(c.category) LIKE @SearchValue)
                ");
                parameters.Add("@SearchValue", "%" + search + "%");
            }

            // Status filter (jika diperlukan)
            if (!string.IsNullOrEmpty(request.Status))
            {
                if (request.Status == "Active")
                    whereConditions.Add("ar.deleted_at IS NULL");
                else if (request.Status == "Non Active")
                    whereConditions.Add("ar.deleted_at IS NOT NULL");
            }

            var whereClause = whereConditions.Count > 0 ? "WHERE " + string.Join(" AND ", whereConditions) : "";

            var fullQuery = baseQuery + " " + whereClause;

            // Hitung total records
            var countQuery = $"SELECT COUNT(*) FROM ({fullQuery}) AS count_alias";
            int total = await connection.ExecuteScalarAsync<int>(countQuery, parameters);

            // Tambahkan sorting dan paging
            fullQuery += " ORDER BY last_update DESC";
            fullQuery += " OFFSET @Skip ROWS FETCH NEXT @PageSize ROWS ONLY";
            parameters.Add("@Skip", request.Skip);
            parameters.Add("@PageSize", request.PageSize);

            result = (await connection.QueryAsync<dynamic>(fullQuery, parameters)).ToList();

            return (result, total);
        }
        catch (Npgsql.NpgsqlException ex)
        {
            Log.Error(ex, "Sql Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace, Desc = "Error while get data to table article" });
            throw;
        }
        catch (Exception ex)
        {
            Log.Error(ex, "General Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace, Desc = "Error while get data to table article" });
            throw;
        }
    }

    public async Task<bool> DeleteArticleAsync(Guid id)
    {
        const string query = @"UPDATE articles SET deleted_at = @Date_now WHERE id = @Id;";
        try
        {
            var today = DateTime.ParseExact(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),"yyyy-MM-dd HH:mm:ss",CultureInfo.InvariantCulture);
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                int affectedRows = await connection.ExecuteAsync(query, new { Id = id, Date_now = today });
                return affectedRows > 0;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error deleting article: {ex.Message}");
            return false;
        }
    }
}