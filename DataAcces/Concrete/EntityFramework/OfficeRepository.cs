using Core.DataAcces.Concrete.EntityFramework;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework.Context;
using Entities.Concrete;


namespace DataAccess.Concrete.EntityFramework
{
   public class OfficeRepository: EfEntityRepositoryBase<Office, ApplicationContext>, IOfficeRepository
    {
    }
}
