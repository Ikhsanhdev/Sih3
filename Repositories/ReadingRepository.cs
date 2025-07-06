using Microsoft.EntityFrameworkCore;
using Sih3.Data;
using Sih3.Models;
// using Sih3.Models.Dappers;
// using Sih3.ViewModels;
using Sih3.Helpers;
using Serilog;
using Newtonsoft.Json;
using Npgsql;
using Dapper;
using System;

namespace Sih3.Repositories
{
    public interface IReadingRepository
    {
        Task<IReadOnlyList<dynamic>> GetAwlrLastReadingAsync();
        Task<IReadOnlyList<dynamic>> GetArrLastReadingAsync();
        Task<IReadOnlyList<dynamic>> GetAwlrArrLastReadingAsync();
    }

    public class ReadingRepository : IReadingRepository
    {
        private readonly Sih3Context _context;
        string _connectionString = string.Empty;
        private readonly AppSettingsHelper appSetting = new AppSettingsHelper();
        public ReadingRepository(Sih3Context context)
        {
            _context = context;
            _connectionString = appSetting.ConnString();
        }

        public async Task<IReadOnlyList<dynamic>> GetAwlrLastReadingAsync()
        {
            try
            {
                using var _db = new NpgsqlConnection(_connectionString);
                var query = $@"
                    SELECT 
                        stations.id,
                        stations.type,
                        stations.image,
                        stations.name,
                        stations.latitude,
                        stations.longitude,
                        river_areas.id AS river_area_id,
                        river_areas.name AS river_area_name,
                        stations.watershed_id,
                        watersheds.id AS watershed_id,
                        watersheds.name AS watershed_name,
                        brands.name AS brand_name,
                        devices.device_id,
                        awlr_settings.unit_display,
                        awlr_settings.unit_sensor,
                        awlr_settings.siaga1,
                        awlr_settings.siaga2,
                        awlr_settings.siaga3,
                        awlr_last_readings.water_level,
                        awlr_last_readings.water_level_elevation,
                        awlr_last_readings.debit,
                        awlr_last_readings.reading_at,
                        awlr_last_readings.change_value,
                        awlr_last_readings.change_status,
                        awlr_last_readings.warning_status,
                        awlr_last_readings.battery
                    FROM 
                        stations
                    JOIN 
                        devices ON stations.id = devices.station_id
                    JOIN 
                        brands ON devices.brand_id = brands.id
                    LEFT JOIN 
                        river_areas ON stations.river_area_id = river_areas.id
                    LEFT JOIN 
                        watersheds ON stations.watershed_id = watersheds.id
                    LEFT JOIN 
                        provinces ON stations.province_id = provinces.id
                    LEFT JOIN 
                        regencies ON stations.regency_id = regencies.id
                    LEFT JOIN 
                        districts ON stations.district_id = districts.id
                    LEFT JOIN 
                        villages ON stations.village_id = villages.id
                    LEFT JOIN 
                        awlr_settings ON stations.id = awlr_settings.station_id AND devices.device_id = awlr_settings.device_id
                    LEFT JOIN 
                        awlr_last_readings ON devices.device_id = awlr_last_readings.device_id
                    WHERE 
                        stations.type = 'AWLR'
                    GROUP BY 
                        stations.id,
                        stations.type,
                        stations.image,
                        stations.name,
                        stations.latitude,
                        stations.longitude,
                        river_areas.id,
                        river_areas.name,
                        stations.watershed_id,
                        watersheds.id,
                        watersheds.name,
                        brands.name,
                        devices.device_id,
                        awlr_settings.unit_display,
                        awlr_settings.unit_sensor,
                        awlr_settings.siaga1,
                        awlr_settings.siaga2,
                        awlr_settings.siaga3,
                        awlr_settings.unit_display,
                        awlr_settings.unit_sensor,
                        awlr_settings.siaga1,
                        awlr_settings.siaga2,
                        awlr_settings.siaga3,
                        awlr_last_readings.water_level,
                        awlr_last_readings.water_level_elevation,
                        awlr_last_readings.debit,
                        awlr_last_readings.reading_at,
                        awlr_last_readings.change_value,
                        awlr_last_readings.change_status,
                        awlr_last_readings.warning_status,
                        awlr_last_readings.battery
                    ORDER BY 
                        brand_name, name;";

                var result = await _db.QueryAsync<dynamic>(query);
                return result.ToList();
            }
            catch (NpgsqlException ex)
            {
                Log.Error(ex, "PostgreSQL Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace });
                throw;
            }
            catch (Exception ex)
            {
                Log.Error(ex, "General Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace });
                throw;
            }
        }

        public async Task<IReadOnlyList<dynamic>> GetArrLastReadingAsync()
        {
            try
            {
                using var _db = new NpgsqlConnection(_connectionString);
                var query = $@"
                    SELECT 
                        stations.id,
                        stations.type,
                        stations.image,
                        stations.name,
                        stations.latitude,
                        stations.longitude,
                        river_areas.id AS river_area_id,
                        river_areas.name AS river_area_name,
                        stations.watershed_id,
                        watersheds.id AS watershed_id,
                        watersheds.name AS watershed_name,
                        brands.name AS brand_name,
                        devices.device_id,
                        arr_last_readings.reading_at,
                        arr_last_readings.rainfall,
                        arr_last_readings.rainfall_last_hour,
                        arr_last_readings.intensity_last_hour,
                        arr_last_readings.Battery
                    FROM 
                        stations
                    JOIN 
                        devices ON stations.id = devices.station_id
                    JOIN 
                        brands ON devices.brand_id = brands.id
                    LEFT JOIN 
                        river_areas ON stations.river_area_id = river_areas.id
                    LEFT JOIN 
                        watersheds ON stations.watershed_id = watersheds.id
                    LEFT JOIN 
                        provinces ON stations.province_id = provinces.id
                    LEFT JOIN 
                        regencies ON stations.regency_id = regencies.id
                    LEFT JOIN 
                        districts ON stations.district_id = districts.id
                    LEFT JOIN 
                        villages ON stations.village_id = villages.id
                    LEFT JOIN 
                        arr_last_readings ON devices.device_id = arr_last_readings.device_id
                    WHERE 
                        stations.type = 'ARR'
                    GROUP BY 
                        stations.id,
                        stations.type,
                        stations.image,
                        stations.name,
                        stations.latitude,
                        stations.longitude,
                        river_areas.id,
                        river_areas.name,
                        stations.watershed_id,
                        watersheds.id,
                        watersheds.name,
                        brands.name,
                        devices.device_id,
                        arr_last_readings.reading_at,
                        arr_last_readings.rainfall,
                        arr_last_readings.rainfall_last_hour,
                        arr_last_readings.intensity_last_hour,
                        arr_last_readings.Battery
                    ORDER BY 
                        brand_name, name;";

                var result = await _db.QueryAsync<dynamic>(query);
                return result.ToList();
            }
            catch (NpgsqlException ex)
            {
                Log.Error(ex, "PostgreSQL Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace });
                throw;
            }
            catch (Exception ex)
            {
                Log.Error(ex, "General Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace });
                throw;
            }
        }

        public async Task<IReadOnlyList<dynamic>> GetAwlrArrLastReadingAsync()
        {
            try
            {
                using var _db = new NpgsqlConnection(_connectionString);
                var query = $@"
                    SELECT 
                        stations.id,
                        stations.type,
                        stations.image,
                        stations.name,
                        stations.latitude,
                        stations.longitude,
                        river_areas.id AS river_area_id,
                        river_areas.name AS river_area_name,
                        stations.watershed_id,
                        watersheds.id AS watershed_id,
                        watersheds.name AS watershed_name,
                        brands.name AS brand_name,
                        devices.device_id,
                        awlr_settings.unit_display,
                        awlr_settings.unit_sensor,
                        awlr_settings.siaga1,
                        awlr_settings.siaga2,
                        awlr_settings.siaga3,
                        awlr_arr_last_readings.water_level,
                        awlr_arr_last_readings.water_level_elevation,
                        awlr_arr_last_readings.debit,
                        awlr_arr_last_readings.reading_at,
                        awlr_arr_last_readings.change_value,
                        awlr_arr_last_readings.change_status,
                        awlr_arr_last_readings.warning_status,
                        awlr_arr_last_readings.rainfall,
                        awlr_arr_last_readings.rainfall_last_hour,
                        awlr_arr_last_readings.intensity_last_hour,
                        awlr_arr_last_readings.battery
                    FROM 
                        stations
                    JOIN 
                        devices ON stations.id = devices.station_id
                    JOIN 
                        brands ON devices.brand_id = brands.id
                    LEFT JOIN 
                        river_areas ON stations.river_area_id = river_areas.id
                    LEFT JOIN 
                        watersheds ON stations.watershed_id = watersheds.id
                    LEFT JOIN 
                        provinces ON stations.province_id = provinces.id
                    LEFT JOIN 
                        regencies ON stations.regency_id = regencies.id
                    LEFT JOIN 
                        districts ON stations.district_id = districts.id
                    LEFT JOIN 
                        villages ON stations.village_id = villages.id
                    LEFT JOIN 
                        awlr_settings ON stations.id = awlr_settings.station_id AND devices.device_id = awlr_settings.device_id
                    LEFT JOIN 
                        awlr_arr_last_readings ON devices.device_id = awlr_arr_last_readings.device_id
                    WHERE 
                        stations.type = 'AWLR_ARR'
                    GROUP BY 
                        stations.id,
                        stations.type,
                        stations.image,
                        stations.name,
                        stations.latitude,
                        stations.longitude,
                        river_areas.id,
                        river_areas.name,
                        stations.watershed_id,
                        watersheds.id,
                        watersheds.name,
                        brands.name,
                        devices.device_id,
                        awlr_settings.unit_display,
                        awlr_settings.unit_sensor,
                        awlr_settings.siaga1,
                        awlr_settings.siaga2,
                        awlr_settings.siaga3,
                        awlr_settings.unit_display,
                        awlr_settings.unit_sensor,
                        awlr_settings.siaga1,
                        awlr_settings.siaga2,
                        awlr_settings.siaga3,
                        awlr_arr_last_readings.water_level,
                        awlr_arr_last_readings.water_level_elevation,
                        awlr_arr_last_readings.debit,
                        awlr_arr_last_readings.reading_at,
                        awlr_arr_last_readings.change_value,
                        awlr_arr_last_readings.change_status,
                        awlr_arr_last_readings.warning_status,
                        awlr_arr_last_readings.rainfall,
                        awlr_arr_last_readings.rainfall_last_hour,
                        awlr_arr_last_readings.intensity_last_hour,
                        awlr_arr_last_readings.battery
                    ORDER BY 
                        brand_name, name;
                ";

                var result = await _db.QueryAsync<dynamic>(query);
                return result.ToList();
            }
            catch (NpgsqlException ex)
            {
                Log.Error(ex, "PostgreSQL Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace });
                throw;
            }
            catch (Exception ex)
            {
                Log.Error(ex, "General Exception: {@ExceptionDetails}", new { ex.Message, ex.StackTrace });
                throw;
            }
        }
    }
}