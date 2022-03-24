using Business.Abstract;
using Business.Constants;
using Core.Aspect.Autofac.Logging;
using Core.CrossCuttingConcerns.Logging.Log4Net.Loggers;
using Core.Utilities.Business;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class OfficeService : IOfficeService
    {

        IOfficeRepository _officeRepository;
        public OfficeService(IOfficeRepository officeRepository)
        {
            _officeRepository = officeRepository;
        }
     


        [LogAspect(typeof(DatabaseLogger))]
        public IResult Add(Office office)
        {
            IResult result = BusinessRules.Run(CheckIfOfficeExist(office.Location));
            if (result != null)
            {
                return result;
            }
            _officeRepository.Add(office);
            return new SuccessResult(Messages.TargetAppAdded);
        }

        public IResult Delete(Office office)
        {
            _officeRepository.Delete(office);
            return new SuccessResult(Messages.TargetAppDeleted);
        }

        public IDataResult<Office> Filter(string coordination)
        {
            var targetApp = _officeRepository.Get(x => x.Coordinates == coordination);
            return new SuccessDataResult<Office>(targetApp);

        }

        public IDataResult<Office> GetById(int id)
        {
            return new SuccessDataResult<Office>(_officeRepository.Get(p => p.Id == id));
        }

        public IDataResult<IEnumerable<Office>> GetAll()
        {
            return new SuccessDataResult<List<Office>>(_officeRepository.GetList().ToList());
        }

        public IResult Update(Office targetApp)
        {
            _officeRepository.Update(targetApp);
            return new SuccessResult(Messages.TargetAppUpdated);
        }

        private IResult CheckIfOfficeExist(string location)
        {

            var result = _officeRepository.GetList(p => p.Location == location).Any();
            if (result)
            {
                return new ErrorResult(Messages.TargetAppAlreadyExists);
            }

            return new SuccessResult();
        }


    }
}
