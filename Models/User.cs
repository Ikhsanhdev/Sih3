using System;
using System.Collections.Generic;

namespace Sih3.Models;

public partial class User
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public string? Email { get; set; }
    public string Password { get; set; } = null!;
    public string? RememberToken { get; set; }
    public Guid? RoleId { get; set; }
    public DateTime? LastLogin { get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public Guid? CreatedBy { get; set; }
    public Guid? UpdatedBy { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? Username { get; set; }
}