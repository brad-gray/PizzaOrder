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
    public class ToppingController : ControllerBase
    {
        private const string JSON_PATH = "StartingData\\Toppings.json";

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Topping>> Get()
        {
            var collection = JsonDeserializer.ReadObjectCollectionFromJson<Topping>(JSON_PATH);
            return collection;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Topping> Get(int id)
        {
            var collection = JsonDeserializer.ReadObjectCollectionFromJson<Topping>(JSON_PATH);
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