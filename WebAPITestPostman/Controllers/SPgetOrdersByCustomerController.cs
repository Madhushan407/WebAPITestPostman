using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPITestPostman.Models;
using System.Web.Http.Description;
using System.Web.Http.Cors;

namespace WebAPITestPostman.Controllers
{
    public class SPgetOrdersByCustomerController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(SPgetOrdersByCustomer))]
        public IHttpActionResult getOrdersByCustomer(int id)
        {
            BackendTestEntities backendTestEntities = new BackendTestEntities();
            IList<SPgetOrdersByCustomer> getCus = backendTestEntities.spGetActiveOrdersByCustomer(id).Select(x => new SPgetOrdersByCustomer()
            {
                UserName = x.UserName,
                ProductName = x.ProductName,
                UnitPrice = x.UnitPrice,
                SupplierName = x.SupplierName,
                OrderStatus = x.OrderStatus,
                OrderTyoe = x.OrderType,
                OrderedOn = x.OrderedOn,
                ShippedOn = x.ShippedOn


            }).ToList();
            return Ok(getCus);
        }
    }
}
