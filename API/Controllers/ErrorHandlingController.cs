using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class ErrorHandlingController : BaseAPIController
  {
    [HttpGet("not-found")]
    public ActionResult GetNotFound()
    {
      // RETURN A 404 Page Not Found ERROR
      return NotFound();
    }

    [HttpGet("bad-request")]
    public ActionResult GetBadRequest()
    {
      // RETURN A 400 Bad Request ERROR
      return BadRequest(new ProblemDetails { Title = "Bad request", Status = 400 });
    }

    [HttpGet("unauthorized")]
    public ActionResult GetUnAuthorized()
    {
      // RETURN A 401 Unaithorized ERROR
      return Unauthorized();
    }

    [HttpGet("validation-error")]
    public ActionResult GetValidationError()
    {
      // CUSTOM ERROR
      ModelState.AddModelError("Problem1", "This is the first error");
      ModelState.AddModelError("Problem2", "This is the 2nd error");
      return ValidationProblem();
    }

    [HttpGet("server-error")]
    public ActionResult GetServerError()
    {
      throw new Exception("This is a server error");
    }
  }
}