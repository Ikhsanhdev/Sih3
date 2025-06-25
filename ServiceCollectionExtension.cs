using Sih3.Interfaces;
using Sih3.Repositories;
// using Sih3.Services;

namespace Sih3
{
  public static class ServiceCollectionteExtension
  {
    public static void RegisterServices(this IServiceCollection services)
    {
      #region ========== [ Register Unit Of Works ] ==========
      services.AddScoped<IUnitOfWorkRepository, UnitOfWorkRepository>();
      #endregion

      #region ========== [ Register Services ] ==========
      
      #endregion

      #region ========== [ Register Repositories ] ==========
      services.AddScoped<IReadingRepository, ReadingRepository>();
      #endregion
    }
  }
}