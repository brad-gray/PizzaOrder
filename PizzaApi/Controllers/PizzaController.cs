using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PizzaApi.Models;
using PizzaApi.Utilities;

namespace PizzaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private const string JSON_PATH = "Database\\Pizzas.json";

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Pizza>> Get()
        {
            var collection = JsonUtility.ReadObjectCollectionFromJson<Pizza>(JSON_PATH);
            return collection;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Pizza> Get(int id)
        {
            var collection = JsonUtility.ReadObjectCollectionFromJson<Pizza>(JSON_PATH);
            return collection[id];
        }

        // // POST api/values
        // [HttpPost]
        // public void Post([FromBody] string value) { }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value) { }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id) { }
    }
}