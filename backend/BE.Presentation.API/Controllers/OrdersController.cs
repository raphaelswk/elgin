using BE.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BE.Presentation.API.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrdersController : ControllerBase
    {
        private static List<Order> orderBook = new List<Order>();
        private static List<UserActionLog> actionLogs = new List<UserActionLog>();

        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetOrders()
        {
            return Ok(orderBook);
        }

        [HttpGet("getById/{orderId}")]
        public ActionResult<IEnumerable<Order>> GetOrdersbyId(int orderId)
        {
            var order = orderBook.Find(o => o.OrderId == orderId);

            if (order == null)
                return NotFound();

            return Ok(order);
        }

        [HttpPost("add")]
        public ActionResult<Order> AddOrder(Order order, string username)
        {
            if (order.Quantity <= 0 || order.Price <= 0 || order.Price > 1000)
                return BadRequest("Invalid order data");

            orderBook.Add(order);
            LogUserAction(username, $"Added order with ID: {order.OrderId}");
            return Ok(order);
        }

        [HttpPut("modify/{orderId}")]
        public ActionResult<Order> ModifyOrder(int orderId, Order updatedOrder, string username)
        {
            var orderToUpdate = orderBook.Find(o => o.OrderId == orderId);

            if (orderToUpdate == null)
                return NotFound();

            orderToUpdate.Quantity = updatedOrder.Quantity;
            orderToUpdate.Price = updatedOrder.Price;
            LogUserAction(username, $"Modified order with ID: {orderId}");
            return Ok(orderToUpdate);
        }

        [HttpDelete("remove/{orderId}")]
        public ActionResult RemoveOrder(int orderId, string username)
        {
            var orderToRemove = orderBook.Find(o => o.OrderId == orderId);

            if (orderToRemove == null)
                return NotFound();

            orderBook.Remove(orderToRemove);
            LogUserAction(username, $"Removed order with ID: {orderId}");
            return Ok();
        }

        private void LogUserAction(string username, string action)
        {
            var log = new UserActionLog
            {
                LogId = actionLogs.Count + 1,
                Username = username,
                Timestamp = DateTime.Now,
                Action = action
            };
            actionLogs.Add(log);
        }
    }
}
