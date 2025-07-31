using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

public interface IImageUploadService
{
    Task<string> UploadImageAsync(IFormFile file, string folderName);
}

public class ImageUploadService : IImageUploadService
{
    private readonly string _storagePath = "wwwroot/uploads";

    public ImageUploadService()
    {
        if (!Directory.Exists(_storagePath))
        {
            Directory.CreateDirectory(_storagePath);
        }
    }

    public async Task<string> UploadImageAsync(IFormFile file, string folderName)
    {
        if (file == null || file.Length == 0)
        {
            throw new ArgumentException("Invalid file");
        }
        if (!Directory.Exists(_storagePath + "/" + folderName))
        {
            Directory.CreateDirectory(_storagePath + "/" + folderName);
        }

        string fileExtension = Path.GetExtension(file.FileName);
        string timestamp = DateTime.UtcNow.ToString("yyyyMMddHHmmss");
        string fileName = $"{folderName}{timestamp}{fileExtension}";
        string filePath = Path.Combine(_storagePath, folderName, fileName);
        string url_path = Path.Combine("/uploads", folderName, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        return url_path;
    }
}
