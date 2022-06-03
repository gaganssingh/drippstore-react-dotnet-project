using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Configuration;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProductsController : BaseAPIController
  {
    private readonly StoreContext _context;

    public ProductsController(StoreContext context)
    {
      _context = context;

    }

    // ROUTE -> api/products
    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
      return await _context.Products.ToListAsync();
    }

    // ROUTE -> api/products/:id
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
      var products = await _context.Products.FindAsync(id);

      if (products == null) return NotFound();

      return products;
    }
  }
}