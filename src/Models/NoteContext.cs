using Microsoft.EntityFrameworkCore;
using System;

namespace DotNetCoreReactCrud.Models
{
    public class NoteContext : DbContext
    {
        public DbSet<Note> Notes { get; set; }

        public NoteContext(DbContextOptions<NoteContext> options)
            : base(options)
        {
        }

        /// <summary>
        /// Seed data
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Note>().HasData(new[] {
                new Note { NoteId = Guid.NewGuid(), User = "UserA", Message = "Message from UserA" },
                new Note { NoteId = Guid.NewGuid(), User = "UserB", Message = "Message from UserB" }
            });
        }
    }
}
