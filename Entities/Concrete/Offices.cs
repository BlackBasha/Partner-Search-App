
using Core.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace Entities.Concrete
{
    public class Office : IEntity
    {
        [Key]
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public string Location { get; set; }
        public string Address { get; set; }
        public string Coordinates { get; set; }
        public Partner partner { get; set; }
    }
}
