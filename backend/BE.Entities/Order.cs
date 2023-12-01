namespace BE.Entities
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime TradingDay { get; set; }
        public int Period { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
