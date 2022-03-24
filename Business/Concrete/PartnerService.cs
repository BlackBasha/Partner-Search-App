using Business.Abstract;
using Business.Constants;
using Core.Aspect.Autofac.Logging;
using Core.CrossCuttingConcerns.Logging.Log4Net.Loggers;
using Core.Utilities.Business;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class PartnerService : IPartnerService
    {
        private IPartnerRepository _partnerRepository;

        private IOfficeRepository _officeRepository;


        public PartnerService(IPartnerRepository partnerRepository, IOfficeRepository officeRepository)
        {
            _partnerRepository = partnerRepository;
            _officeRepository = officeRepository;
        }

        [LogAspect(typeof(DatabaseLogger))]
        public IResult Add(Partner partner)
        {
            _partnerRepository.Add(partner);
            return new SuccessResult(Messages.AppLogAdded);
        }

        public IDataResult<IEnumerable<PartnerDataDto>> GetPartners(PartnerFilterDto partnerFilter)
        {
            var partnerDataList = new List<PartnerDataDto>();
            var offices=_officeRepository.GetList();
            foreach (var item in offices)
            {
                var officelan =double.Parse( item.Coordinates.Split(',')[0]);
                var officelon = double.Parse(item.Coordinates.Split(',')[1]);
                var officeDistance = DistanceCalculator.DistanceBetweenPlaces(partnerFilter.StartLon, partnerFilter.StartLan, officelon, officelan);
                if (officeDistance< partnerFilter.Distance)
                {
                    var partner = _partnerRepository.Get(x=>x.Id==item.PartnerId);
                    partnerDataList.Add(new PartnerDataDto {Id=item.PartnerId, Address=item.Address,Organization=partner.Organization });
                }
            }
       

            return new SuccessDataResult<List<PartnerDataDto>>(partnerDataList.OrderBy(x=>x.Organization).ToList());
        }

        public void SaveData(List<Partner> data)
        {
            foreach (var item in data)
            {
                 _partnerRepository.Add(item);
                foreach (var office in item.offices)
                {
                    office.PartnerId = item.Id;
                    _officeRepository.Add(office);
                }
            }
           
        }
    }
}
