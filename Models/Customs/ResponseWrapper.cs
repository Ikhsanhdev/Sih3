namespace Sih3.Models.Customs
{
  public class ResponseWrapper
  {
    public int Code { get; set; }
    public string Message { get; set; }
    public dynamic? Response { get; set; }
  }
}