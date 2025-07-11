using Sih3.Models;
using Dapper;
using Npgsql;

namespace Sih3.Repositories;

public interface IUserRepository {
    Task<User?> GetByIdAsync(Guid id);
    Task<User?> GetByUsernameAsync(string username);
    Task UpdateLastLoginAsync(Guid id);
}

public class UserRepository : IUserRepository {
    private readonly string _connectionString;
    public UserRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection") ?? "";
    }

    public async Task<User?> GetByIdAsync(Guid id) {
        try {
            string query = @"SELECT
                    id AS ""Id"",
                    username AS ""Username"",
                    name AS ""Name"",
                    email AS ""Email"",
                    phone AS ""Phone"",
                    password AS ""Password"",
                    last_login AS ""LastLogin""
                FROM users WHERE id = @id";

            using var connection = new NpgsqlConnection(_connectionString);
            User? user = await connection.QueryFirstOrDefaultAsync<User>(query, new { id });
            return user;
        } catch (NpgsqlException) {
            throw;
        } catch (System.Exception) {
            throw;
        }
    }

    public async Task<User?> GetByUsernameAsync(string username) {
        try {
            string query = @"SELECT
                    id AS ""Id"",
                    username AS ""Username"",
                    name AS ""Name"",
                    email AS ""Email"",
                    phone AS ""Phone"",
                    password AS ""Password"",
                    last_login AS ""LastLogin""
                FROM users WHERE username = @username";

            using var connection = new NpgsqlConnection(_connectionString);
            User? user = await connection.QueryFirstOrDefaultAsync<User>(query, new { username });
            return user;
        } catch (NpgsqlException) {
            throw;
        } catch (System.Exception) {
            throw;
        }
    }

    public async Task UpdateLastLoginAsync(Guid id) {
        try {
            string query = @"UPDATE users SET last_login = @DateNow WHERE id = @id";
            using var connection = new NpgsqlConnection(_connectionString);
            var parameters = new
            {
                DateNow = DateTime.Now,
                id
            };

            await connection.ExecuteAsync(query, parameters);
        } catch (NpgsqlException) {
            throw;
        } catch (System.Exception) {
            throw;
        }
    }
}