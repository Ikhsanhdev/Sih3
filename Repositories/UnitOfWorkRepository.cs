using Sih3.Interfaces;
using Sih3.Models;
using Sih3.Repositories;

namespace Sih3.Repositories
{
    public class UnitOfWorkRepository : IUnitOfWorkRepository
    {
        public UnitOfWorkRepository(
            IReadingRepository readingRepository
        )
        {
            Readings = readingRepository;
        }

        public IReadingRepository Readings { get; set; }
    }
}