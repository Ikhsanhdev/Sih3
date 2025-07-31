using Sih3.Services;

namespace Sih3.Interfaces
{
  public interface IUnitOfWorkService
  {
    IAuthService Auths { get; }
    ImageUploadService ImageUploads { get; }
  }
}
