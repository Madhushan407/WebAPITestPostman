using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPITestPostman.Models
{
    public class SPgetOrdersByCustomer
    {
        public string UserName { get; set; }
        public string ProductName { get; set; }
        public Nullable<decimal> UnitPrice { get; set; }
        public string SupplierName { get; set; }

        public int OrderStatus { get; set; }

        public Nullable<int> OrderTyoe { get; set; }

        public Nullable<System.DateTime> OrderedOn { get; set; }

        public Nullable<System.DateTime> ShippedOn { get; set; }
    }
}