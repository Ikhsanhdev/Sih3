namespace Sih3.Helpers
{
    public class AppSettingsHelper
    {
        public string getvalue(string variable)
        {
            string basePath = AppContext.BaseDirectory;
            IConfigurationRoot conf = new ConfigurationBuilder()
                .SetBasePath(basePath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .Build();

            return conf.GetValue<string>(variable);
        }

        public bool IsDevelopment()
        {

            bool IsDev = false;
            var Env = getvalue("EmailSetting:Env");
            if (Env == "Development")
            {
                return true;
            }

            return IsDev;
        }

        public string ConnString()
        {
            return getvalue("ConnectionStrings:DefaultConnection");
        }
        
    }
}
