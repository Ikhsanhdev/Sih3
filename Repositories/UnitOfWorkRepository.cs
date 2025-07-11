using Sih3.Interfaces;
using Sih3.Models;
using Sih3.Repositories;

namespace Sih3.Repositories
{
    public class UnitOfWorkRepository : IUnitOfWorkRepository
    {
        public UnitOfWorkRepository(
            IReadingRepository readingRepository,
            IUserRepository userRepository
        )
        {
            Readings = readingRepository;
            User = userRepository;
        }

        public IReadingRepository Readings { get; set; }
        public IUserRepository User { get; set;}
    }
}