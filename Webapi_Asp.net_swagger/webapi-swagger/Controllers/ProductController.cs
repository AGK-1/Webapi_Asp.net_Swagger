using Microsoft.AspNetCore.Mvc;
using webapi_swagger.Models;

namespace webapi_swagger.Controllers
{
    [Route("/api/[controller]")]
    public class ProductController : Controller
    {
        private static List<Product> products = new List<Product>(new[]
        {
            new Product(){id=1,name="Applie",price=521223},
            new Product(){id=2,name="Mashmelon",price=52},
            new Product(){id=3,name="Egges",price=57581},
        });

        [HttpGet]
        public IEnumerable<Product> Get() => products;
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet("(id)")]
        public IActionResult Get(int id)
        {
            var product = products.SingleOrDefault(p => p.id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpDelete("(id)")]
        public IActionResult Delete(int id) 
        {
            products.Remove(products.SingleOrDefault(p => p.id == id));
            return Ok(new {Message = "Deleteing Success"});
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            product.id = products.Count + 1;
            products.Add(product);  
            return CreatedAtAction(nameof(Get),new {Id = product.id},product);


        }

        [HttpPost("Add_productwitg_swagger_body")]
        public IActionResult PostBody([FromBody]Product product) =>Post (product);

        [HttpPut]
        public IActionResult Put(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var stared = products.SingleOrDefault(p => p.id == product.id);
          
            if (stared == null) return NotFound();
          
          
            stared.name = product.name;
            stared.price = product.price;
            return Ok(stared);
        }
    }
}
