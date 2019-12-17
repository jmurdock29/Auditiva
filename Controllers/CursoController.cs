

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
    public class CursoController : ControllerBase
    {
        private readonly AuditivaContext _context;
        public CursoController(AuditivaContext context)
        {
            _context = context;
            if (_context.CursoItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.CursoItems.Add(new CursoItem
                {

                    CursoId = "147",
                    PNombres = "jijo",
                    PApellidos = "uak",
                    PGrado = "GRADO-2°",
                    PTipo = "PROFESOR",
                });
            }
            _context.SaveChanges();

        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CursoItem>>> GetCursoItems()
        {
            return await _context.CursoItems.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{cursoId}")]
        public async Task<ActionResult<CursoItem>> GetCursoItem(string cursoId)
        {
            var cursoItem = await _context.CursoItems.FindAsync(cursoId);
            if (cursoItem == null)
            {
                return NotFound();
            }
            return cursoItem;
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<CursoItem>> PostCursoItem(CursoItem item)
        {
            _context.CursoItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCursoItem), new { id = item.CursoId }, item);
        }



        // PUT: api/Task/5
        [HttpPut("{cursoId}")]
        public async Task<IActionResult> PutCursoItem(string cursoId, CursoItem item)
        {
            if (cursoId != item.CursoId)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }



        // DELETE: api/Todo/5
        [HttpDelete("{cursoId}")]
        public async Task<IActionResult> DeleteCursoItem(string cursoId)
        {
            var CursoItem = await
            _context.CursoItems.FindAsync(cursoId);
            if (CursoItem == null)
            {
                return NotFound();
            }
            _context.CursoItems.Remove(CursoItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }



    }
}