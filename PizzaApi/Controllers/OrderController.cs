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
    public class OrderController : ControllerBase
    {
        private const string JSON_PATH = "StartingData\\Orders.json";

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Order>> Get()
        {
            var collection = JsonDeserializer.ReadObjectCollectionFromJson<Order>(JSON_PATH);
            return collection;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value) { }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) { }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id) { }
    }
}