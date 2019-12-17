using Microsoft.EntityFrameworkCore;
namespace Auditiva_Netcore.Models
{
    public class AuditivaContext : DbContext
    {
        public AuditivaContext(DbContextOptions<AuditivaContext> options) :
         base(options)
        {
        }
        public DbSet<ProfesorItem> ProfesorItems { get; set; }
        public DbSet<CursoItem> CursoItems { get; set; }
        public DbSet<CalificacionesItem> CalificacionesItems { get; set; }



    }
}