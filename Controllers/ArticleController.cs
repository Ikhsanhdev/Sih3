using System.Globalization;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sih3.Data;
using Sih3.Models;
using Sih3.Models.Customs;
using Sih3.Interfaces;
using Serilog;
using RestSharp;
using RestSharp.Authenticators;
using System.Net;
using System.Diagnostics;

namespace Sih3.Controllers;

public class ArticleController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IUnitOfWorkRepository _unitOfWorkRepository;

    public ArticleController(ILogger<HomeController> logger, IUnitOfWorkRepository unitOfWorkRepository)
    {
        _logger = logger;
        _unitOfWorkRepository = unitOfWorkRepository;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Detail()
    {
        return View();
    }
}