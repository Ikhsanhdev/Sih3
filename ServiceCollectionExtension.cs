using Sih3.Interfaces;
using Sih3.Repositories;
using Sih3.Services;

namespace Sih3
{
  public static class ServiceCollectionteExtension
  {
    public static void RegisterServices(this IServiceCollection services)
    {
      #region ========== [ Register Unit Of Works ] ==========
      services.AddScoped<IUnitOfWorkRepository, UnitOfWorkRepository>();
      services.AddScoped<IUnitOfWorkService, UnitOfWorkService>();
      #endregion

      #region ========== [ Register Services ] ==========
      services.AddScoped<IAuthService, AuthService>();
      services.AddScoped<ImageUploadService, ImageUploadService>();
      #endregion

      #region ========== [ Register Repositories ] ==========
      services.AddScoped<IReadingRepository, ReadingRepository>();
      services.AddScoped<IUserRepository, UserRepository>();
      services.AddScoped<IArticleRepository, ArticleRepository>();
      #endregion
    }
  }
}