using Core.Utilities.Results;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IPartnerService
    {
        IResult Add(Partner entity);
        IDataResult<IEnumerable<PartnerDataDto>> GetPartners(PartnerFilterDto partnerFilter);
        void SaveData(List<Partner> data);

    }
}
