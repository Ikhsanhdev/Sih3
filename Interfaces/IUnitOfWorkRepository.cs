using Sih3.Repositories;

namespace Sih3.Interfaces
{
    public interface IUnitOfWorkRepository
    {
        IReadingRepository Readings { get; }
        IUserRepository User { get; }
        IArticleRepository Article { get; }
    }
}