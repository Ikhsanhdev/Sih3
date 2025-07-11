namespace Sih3.Helpers;

public class ClaimIdentity
{
  readonly IHttpContextAccessor _httpContextAccessor;
  public ClaimIdentity(IHttpContextAccessor httpContextAccessor)
  {
    this._httpContextAccessor = httpContextAccessor;
  }
  private static ClaimIdentity instance = new ClaimIdentity(new HttpContextAccessor());
  public static ClaimIdentity Instance
  {
    get { return instance; }
  }

  public string Claim(string param)
  {
    var userClaims = _httpContextAccessor.HttpContext?.User?.Claims;

    if (userClaims != null && userClaims.Any())
    {
      var value = userClaims
          .Where(a => a.Type.ToLower() == param.ToLower())
          .Select(a => string.IsNullOrEmpty(a.Value) ? "" : a.Value)
          .FirstOrDefault()?.ToString() ?? "";
      return value;
    }
    else
    {
      return "";
    }
  }

  public static string Username
  {
    get
    {
      var CheckIdentity = String.IsNullOrEmpty(Instance.Claim("Username")) ? "" : Instance.Claim("Username");
      return CheckIdentity;
    }
  }
  public static string UserId
  {
    get
    {
      var CheckIdentity = String.IsNullOrEmpty(Instance.Claim("UserId")) ? "" : Instance.Claim("UserId");
      return CheckIdentity;
    }
  }

  public static string Name
  {
    get
    {
      var CheckIdentity = String.IsNullOrEmpty(Instance.Claim("Name")) ? "" : Instance.Claim("Name");
      return CheckIdentity;
    }
  }

  public static string Email
  {
    get
    {
      var CheckIdentity = String.IsNullOrEmpty(Instance.Claim("Email")) ? "" : Instance.Claim("Email");
      return CheckIdentity;
    }
  }

  public static string Phone
  {
    get
    {
      var CheckIdentity = String.IsNullOrEmpty(Instance.Claim("Phone")) ? "" : Instance.Claim("Phone");
      return CheckIdentity;
    }
  }
}
