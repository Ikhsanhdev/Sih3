using Sih3;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Sih3.Data;
using Sih3.Models;
using Microsoft.AspNetCore.Mvc.Controllers;
using System;
using Dapper;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews().AddNewtonsoftJson(opt =>
{
  opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

builder.Services.RegisterServices();

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
// builder.Services.AddHttpClient<ApiController>();

// Add services to the container.
builder.Services.AddControllersWithViews();

string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<Sih3Context>((provider, options) =>
{
  if (connectionString != null)
  {
    options.UseNpgsql(connectionString)
        .UseSnakeCaseNamingConvention()
        .UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()))
        .EnableSensitiveDataLogging();
  }
});

#region Authentication / Authorization
builder.Services.AddAuthorization();
builder.Services.AddAuthentication(options =>
{
  options.DefaultAuthenticateScheme = "CookieAuthentication";
  options.DefaultChallengeScheme = "CookieAuthentication";
})
.AddCookie("CookieAuthentication", options =>
{
  options.Cookie.Name = "Sih3CookiesAuth";
  options.LoginPath = "/Auth/Login";
  options.LogoutPath = "/Auth/Logout";
  options.AccessDeniedPath = "/Auth/AccessDenied";
  options.ExpireTimeSpan = TimeSpan.FromHours(6);
  options.Cookie.Path = "/"; // Pastikan cookie berlaku di seluruh aplikasi
});
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  app.UseExceptionHandler("/Home/Error");
  // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
  // app.UseHsts();
}

// app.UseHttpsRedirection();
// app.UseStatusCodePagesWithReExecute("/Main/PageNotFound");
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"); // <-- Update in AspnetCoreMvcStarter

app.Run();
