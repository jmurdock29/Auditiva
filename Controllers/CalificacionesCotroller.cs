

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
    public class CalificacionesController : ControllerBase
    {
        private readonly AuditivaContext _context;
        public CalificacionesController(AuditivaContext context)
        {
            _context = context;
            if (_context.CalificacionesItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.CalificacionesItems.Add(new CalificacionesItem
                {

                    CalificacionId = "147",
                     CIdentificacion = "333",
                    TitleTema = "Multiplicaciones",
                    NumbActividad = "ACTIVIDAD-1",
                    NotaActividad = "100",
                });
            }
            _context.SaveChanges();

        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CalificacionesItem>>> GetCalificacionesItems()
        {
            return await _context.CalificacionesItems.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{calificacionId}")]
        public async Task<ActionResult<CalificacionesItem>> GetCalificacionesItem(string calificacionId)
        {
            var calificacionesItem = await _context.CalificacionesItems.FindAsync(calificacionId);
            if (calificacionesItem == null)
            {
                return NotFound();
            }
            return calificacionesItem;
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<CalificacionesItem>> PostCalificacionesItem(CalificacionesItem item)
        {
            _context.CalificacionesItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCalificacionesItem), new { id = item.CalificacionId }, item);
        }



        // PUT: api/Task/5
        [HttpPut("{calificacionId}")]
        public async Task<IActionResult> PutCalificacionesItem(string calificacionId, CalificacionesItem item)
        {
            if (calificacionId != item.CalificacionId)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }



        // DELETE: api/Todo/5
        [HttpDelete("{calificacionId}")]
        public async Task<IActionResult> DeleteCalificacionesItem(string calificacionId)
        {
            var CalificacionesItem = await
            _context.CalificacionesItems.FindAsync(calificacionId);
            if (CalificacionesItem == null)
            {
                return NotFound();
            }
            _context.CalificacionesItems.Remove(CalificacionesItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }



    }
}