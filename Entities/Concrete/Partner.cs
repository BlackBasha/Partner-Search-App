
using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Entities.Concrete
{
    public class Partner : IEntity
    {
        [Key]
        public int Id { get; set; }
        public string UrlName { get; set; }
        public string Organization { get; set; }
        public bool WillWorkRemotly { get; set; }
        public string WebSite { get; set; }
        public string Services { get; set; }

        public ICollection<Office> offices { get; set; }
    }
}
