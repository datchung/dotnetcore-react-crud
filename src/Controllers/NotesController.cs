using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreReactCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        // GET: api/Notes
        [HttpGet]
        public IEnumerable<dynamic> Get()
        {
            return new[]{
                new {
                    User = "UserA",
                    Message = "Note from user A"
                },
                new {
                    User = "UserB",
                    Message = "Note from user B"
                }
            };
        }
    }
}
