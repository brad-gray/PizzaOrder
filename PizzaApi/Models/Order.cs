using System;
using System.Collections.Generic;

namespace PizzaApi.Models
{
    public class Order
    {
        public int OrderId { get; set; }

        public string Name { get; set; }

        public List<Pizza> Pizzas { get; set; }

        public decimal TotalCost { get; set; } //only return the sum of all pizza costs

        public DateTime OrderDate { get; set; }
    }
}