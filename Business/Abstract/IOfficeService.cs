using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface  IOfficeService 
    {
        IResult Add(Office entity);

        IResult Update(Office entity);

        IDataResult<IEnumerable<Office>> GetAll();

        IResult Delete(Office entity);

        IDataResult<Office> GetById(int id);
    }
}
