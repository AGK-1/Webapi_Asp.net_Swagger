using System.ComponentModel.DataAnnotations;

namespace webapi_swagger.Models
{
    public class Product
    {
        public int id {  get; set; }

        [Required]
        public string name { get; set; }
        [Required]
        public decimal price { get; set; }

    }
}
