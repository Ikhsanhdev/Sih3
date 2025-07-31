using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Sih3.Models;
using Sih3.ViewModels;
using Sih3.Interfaces;
using Sih3.Models.Datatables;
using Serilog;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Sih3.Models.Customs;

namespace Sih3.Controllers;

[Authorize]
public class AdminController : Controller
{
    private readonly ILogger<AdminController> _logger;
    private readonly IUnitOfWorkRepository _unitOfWorkRepository;
    private readonly IUnitOfWorkService _unitOfWorkService;

    public AdminController(IUnitOfWorkRepository unitOfWorkRepository, IUnitOfWorkService unitOfWorkService)
    {
        this._unitOfWorkRepository = unitOfWorkRepository;
        this._unitOfWorkService = unitOfWorkService;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Article()
    {
        return View("~/Views/Admin/Article/Index.cshtml");
    }

    [HttpGet("article/create")]
    public IActionResult CreateEditArticle(Guid id)
    {
        ArticleVM model = new ArticleVM();

        return View("~/Views/Admin/Article/CreateEdit.cshtml", model);
    }

    [HttpPost]
    public async Task<IActionResult> SaveArticle(ArticleVM model, IFormFile file)
    {
        ResponseWrapper response = new();
        if (file != null)
        {
            model.img_url = await _unitOfWorkService.ImageUploads.UploadImageAsync(file, "articles");
        }
        response = await _unitOfWorkRepository.Article.SaveAsync(model);
        return Json(response);
    }

    public async Task<IActionResult> GetArticleData()
    {
        var ModelRequest = new JqueryDataTableRequest
        {
            Draw = Request.Form["draw"].FirstOrDefault() ?? "",
            Start = Request.Form["start"].FirstOrDefault() ?? "",
            Length = Request.Form["length"].FirstOrDefault() ?? "25",
            SortColumn = Request.Form["columns[" + Request.Form["order[0][column]"].FirstOrDefault() + "][name]"].FirstOrDefault() ?? "",
            SortColumnDirection = Request.Form["order[0]dir"].FirstOrDefault() ?? "",
            SearchValue = Request.Form["search_value"].FirstOrDefault() ?? "",
            Status = Request.Form["status"].FirstOrDefault() ?? ""
        };

        try
        {
            if (ModelRequest.Length == "-1")
            {
                ModelRequest.PageSize = int.MaxValue;
            }
            else
            {
                ModelRequest.PageSize = ModelRequest.PageSize != null ? Convert.ToInt32(ModelRequest.Length) : 0;
            }

            ModelRequest.Skip = ModelRequest.Start != null ? Convert.ToInt32(ModelRequest.Start) : 0;

            var (rekomendasi, recordsTotal) = await _unitOfWorkRepository.Article.GetDataArticle(ModelRequest);
            var jsonData = new { draw = ModelRequest.Draw, recordsFiltered = recordsTotal, recordsTotal, data = rekomendasi };
            return Json(jsonData);
        }
        catch (Exception ex)
        {
            Log.Error(ex, "General Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace, DatatableRequest = ModelRequest });
            throw;
        }
    }

    [HttpGet]
    public IActionResult EditArticle(Guid id)
    {

        var model = _unitOfWorkRepository.Article.GetArticleByIdAsync(id).Result;
        Console.WriteLine(model);
        if (model == null)
        {
            return View("~/Views/404/PageNotFound.cshtml");
        }
        return View("~/Views/Admin/Article/CreateEdit.cshtml", model);
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteArticle(Guid id)
    {
        ResponseWrapper response = new();
        var msg = await _unitOfWorkRepository.Article.DeleteArticleAsync(id);

        if (msg)
        {
            response.Message = "Data berhasil dihapus";
            response.Code = 200;
        }
        else
        {
            response.Message = "Data gagal dihapus";
            response.Code = 500;
        }

        return Json(response);
    }
}