using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sih3.Models.Customs
{
    public class HttpResult
    {
        public MetaData metaData { get; set; }
        public object? response { get; set; }
    }

    public class MetaData
    {
        public int code { get; set; } = 500;
        public string message { get; set; } = "Terjadi kesalahan sistem.";
    }

}