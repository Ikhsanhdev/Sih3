using Sih3.Interfaces;

namespace Sih3.Services
{
  public class UnitOfWorkService : IUnitOfWorkService
  {
    public UnitOfWorkService(
      IAuthService authService,
      ImageUploadService imageUploadService
    )
    {
      Auths = authService;
      ImageUploads = imageUploadService;
    }

    public IAuthService Auths { get; }
    public ImageUploadService ImageUploads { get; }
  }
}
