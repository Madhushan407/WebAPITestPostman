//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAPITestPostman.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Order
    {
        public int OrderId { get; set; }
        public Nullable<int> ProductId { get; set; }
        public int OrderStatus { get; set; }
        public Nullable<int> OrderType { get; set; }
        public Nullable<int> OrderBy { get; set; }
        public Nullable<System.DateTime> OrderedOn { get; set; }
        public Nullable<System.DateTime> ShippedOn { get; set; }
        public Nullable<bool> IsActive { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }
    }
}
