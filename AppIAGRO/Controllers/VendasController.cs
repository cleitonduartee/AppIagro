using Microsoft.AspNetCore.Mvc;

namespace AppIAGRO.Controllers
{
    public class VendasController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
