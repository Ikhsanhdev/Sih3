using Sih3.Interfaces;

namespace Sih3.Services
{
  public class UnitOfWorkService : IUnitOfWorkService
  {
    public UnitOfWorkService(
      IAuthService authService
    )
    {
      Auths = authService;
    }

    public IAuthService Auths { get; }
  }
}
