using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using PizzaApi.Models;

namespace PizzaApi.Utilities
{
    public static class JsonDeserializer
    {
        public static List<ObjectType> ReadObjectCollectionFromJson<ObjectType>(string filePath)
        {
            var collection = new List<ObjectType>();
            using (var r = new StreamReader(filePath))
            {
                var json = r.ReadToEnd();
                collection = JsonConvert.DeserializeObject<List<ObjectType>>(json);
            }

            return collection;
        }
    }
}