namespace BE.Entities
{
    public class UserActionLog
    {
        public int LogId { get; set; }
        public string Username { get; set; }
        public DateTime Timestamp { get; set; }
        public string Action { get; set; }
    }
}
