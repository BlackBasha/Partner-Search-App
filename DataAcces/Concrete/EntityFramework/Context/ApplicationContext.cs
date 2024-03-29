﻿using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Entities.Data;
using Core.Entities;

namespace DataAccess.Concrete.EntityFramework.Context
{
   public class ApplicationContext: IdentityDbContext<AppIdentityUser>
    {

        public ApplicationContext()
           : base()
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Partner>()
                .HasMany(c => c.offices)
                .WithOne(e => e.partner);

            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\sqlexpress;Database=PartnersTestCase;Trusted_Connection=true");
        }
        public DbSet<Partner> Partners {get; set;}
        public DbSet<Office> Offices { get; set;}
    }
}
