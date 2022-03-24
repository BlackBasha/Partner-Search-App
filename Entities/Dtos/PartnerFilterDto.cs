using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
   public class PartnerFilterDto
    {
        public double StartLon { get; set; }
        public double StartLan { get; set; }

        public double Distance { get; set; }
    }
}
