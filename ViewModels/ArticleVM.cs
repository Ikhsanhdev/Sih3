using System;
using System.Collections.Generic;

namespace Sih3.ViewModels;

public partial class ArticleVM
{
    public Guid id { get; set; }
    public string? title { get; set; }  
    public string? description { get; set; }  
    public string? author { get; set; } 
    public string? img_url { get; set; }
    public string? category { get; set; }
    public string? slug { get; set; }
    public DateTime? create_at { get; set; }
    public DateTime? updated_at { get; set; }
}