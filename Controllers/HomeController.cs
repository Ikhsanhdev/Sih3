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
// using Sih3.Helpers;
// using Sih3.Models.Datatables;

namespace Sih3.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IUnitOfWorkRepository _unitOfWorkRepository;

    public HomeController(ILogger<HomeController> logger, IUnitOfWorkRepository unitOfWorkRepository)
    {
        _logger = logger;
        _unitOfWorkRepository = unitOfWorkRepository;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public async Task<JsonResult> GetAwlrLastReading()
    {
        var result = new HttpResult();
        var getResult = await _unitOfWorkRepository.Readings.GetAwlrLastReadingAsync();

        result.metaData = new MetaData
        {
            code = 200,
            message = "OK"
        };

        result.response = getResult;
        return Json(result);
    }

    public async Task<JsonResult> GetArrLastReading()
    {
        var result = new HttpResult();
        var getResult = await _unitOfWorkRepository.Readings.GetArrLastReadingAsync();

        result.metaData = new MetaData
        {
            code = 200,
            message = "OK"
        };

        result.response = getResult;
        return Json(result);
    }

    public async Task<JsonResult> GetAwlrArrLastReading()
    {
        var result = new HttpResult();
        var getResult = await _unitOfWorkRepository.Readings.GetAwlrArrLastReadingAsync();

        result.metaData = new MetaData {
            code = 200,
            message = "OK"
        };

        result.response = getResult;
        return Json(result);
    }

    public async Task<JsonResult> GetSensorOffline()
    {
        var result = new HttpResult();
        var getResult = await _unitOfWorkRepository.Readings.GetSensorOffline();

        result.metaData = new MetaData
        {
            code = 200,
            message = "OK"
        };

        result.response = getResult;
        return Json(result);
    }

    public async Task<IActionResult> GetSensorOfflineCount()
    {
        var count = await _unitOfWorkRepository.Readings.GetCountSensorOffline();
        return Json(count); // pastikan nilai kembalian adalah { jumlah: n }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
