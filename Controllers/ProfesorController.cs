
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Auditiva_Netcore.Models;
using System.Threading.Tasks;
using System;
using System.Data;

namespace Auditiva_Netcore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfesorController : ControllerBase
    {
        private readonly AuditivaContext _context;
        public ProfesorController(AuditivaContext context)
        {
            _context = context;
            if (_context.ProfesorItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.ProfesorItems.Add(new ProfesorItem
                {

                    Identificacion = "admin",
                    Nombres = "admin",
                    Apellidos = "admin",
                    Genero = "Masculino",
                    FechaNacimento = Convert.ToDateTime("3/11/2000").Date,
                    Telefono = "1",
                    Correo = "admin@auditiva.es",
                    Grado = "admin",
                    Tipo = "ADMINISTRADOR",
                    Password = "admin",
                });

                   _context.ProfesorItems.Add(new ProfesorItem
                {

                    Identificacion = "111",
                    Nombres = "Juan",
                    Apellidos = "Carlos",
                    Genero = "Masculino",
                    FechaNacimento = Convert.ToDateTime("3/11/2000").Date,
                    Telefono = "5748921",
                    Correo = "Juancarlos@auditiva.es",
                    Grado = "GRADO-2°",
                    Tipo = "PROFESOR",
                    Password = "111",
                });

                    _context.ProfesorItems.Add(new ProfesorItem
                {

                    Identificacion = "222",
                    Nombres = "Lucas",
                    Apellidos = "Maracaton",
                    Genero = "Masculino",
                    FechaNacimento = Convert.ToDateTime("3/11/2000").Date,
                    Telefono = "5413206",
                    Correo = "UnCorito@auditiva.es",
                    Grado = "GRADO-2°",
                    Tipo = "ESTUDIANTE",
                    Password = "222",
                });
            }
            _context.SaveChanges();

        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfesorItem>>> GetProfesorItems()
        {
            return await _context.ProfesorItems.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{identificacion}")]
        public async Task<ActionResult<ProfesorItem>> GetProfesorItem(string identificacion)
        {
            var profesorItem = await _context.ProfesorItems.FindAsync(identificacion);
            if (profesorItem == null)
            {
                return NotFound();
            }
            return profesorItem;
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<ProfesorItem>> PostProfesorItem(ProfesorItem item)
        {
            _context.ProfesorItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProfesorItem), new { id = item.Identificacion }, item);
        }



        // PUT: api/Task/5
        [HttpPut("{identificacion}")]
        public async Task<IActionResult> PutProfesorItem(string identificacion, ProfesorItem item)
        {
            if (identificacion != item.Identificacion)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }



        // DELETE: api/Todo/5
        [HttpDelete("{identificacion}")]
        public async Task<IActionResult> DeleteProfesorItem(string identificacion)
        {
            var ProfesorItem = await
            _context.ProfesorItems.FindAsync(identificacion);
            if (ProfesorItem == null)
            {
                return NotFound();
            }
            _context.ProfesorItems.Remove(ProfesorItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }


    }
}