using AutoMapper;
using Business.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvitationApi.Controllers
{
    [Route("api/{controller}/{action}")]
    [ApiController]
    public class PartnerController : ControllerBase
    {
        private IPartnerService _partnerService;
        private readonly IMapper _mapper;
        public PartnerController(IMapper mapper, IPartnerService partnerService)
        {
            _partnerService = partnerService;
            _mapper = mapper;

        }

        [HttpPost]
        public IActionResult Search(PartnerFilterDto partnerFilter)
        {
           var result = _partnerService.GetPartners(partnerFilter);
           return  Ok(result);
        }

        [HttpPost]
        public IActionResult Upload(List<Partner> data)
        {
            _partnerService.SaveData(data);
            return Ok();
        }


    }
}
