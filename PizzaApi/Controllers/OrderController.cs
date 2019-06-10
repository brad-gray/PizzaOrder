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
        private const string JSON_PATH = "Database\\Orders.json";
        //private List<Order> collection = JsonUtility.ReadObjectCollectionFromJson<Order>(JSON_PATH);

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Order>> Get()
        {
            var collection = JsonUtility.ReadObjectCollectionFromJson<Order>(JSON_PATH);
            return collection;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Order> Get(int id)
        {
            //Not using any caching currently
            var collection = JsonUtility.ReadObjectCollectionFromJson<Order>(JSON_PATH);
            return collection.Find(x => x.OrderId == id) ?? null;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Order ord)
        {
            Console.WriteLine($"Name: {ord.Name} OrderId: {ord.OrderId}");
            var collection = JsonUtility.ReadObjectCollectionFromJson<Order>(JSON_PATH);
            collection.Add(ord);
            JsonUtility.WriteObjectCollectionToJson(JSON_PATH, collection);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) { }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id) { }
    }
}