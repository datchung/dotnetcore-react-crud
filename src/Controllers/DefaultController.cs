using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreReactCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
        // GET: api/Default
        [HttpGet]
        public dynamic Get()
        {
            return new
            {
                name = "Simple React API",
                href = $"http://{Request.Host}{Request.Path}"
            };
        }
    }
}
