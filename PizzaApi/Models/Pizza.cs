using System;
using System.Collections.Generic;

namespace PizzaApi.Models
{
    public class Pizza
    {
        public string Size { get; set; }

        public double Price { get; set; }

        public List<Topping> Toppings { get; set; }
    }
}