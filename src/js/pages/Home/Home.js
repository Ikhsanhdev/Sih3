let map;
function initMap() {
    // Lokasi awal (contoh: Jakarta)
    const jakarta = { lat: 0.5, lng: 110 };

    // Inisialisasi peta
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: jakarta,
        gestureHandling: 'greedy', // Mengizinkan zoom menggunakan scroll
        // mapTypeId: google.maps.MapTypeId.HYBRID,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_LEFT // Pindahkan ke bawah kiri
        },
        styles: [
            {
                featureType: "administrative.locality", // Nama kota
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "administrative.neighborhood", // Nama kelurahan
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "poi", // Tempat umum
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "transit",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "administrative.province", // Nama provinsi
                elementType: "labels",
                stylers: [{ visibility: "on" }]
            }
        ]
    });

    function loadDAS(url, color) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.features.forEach(f => {
                    if (!f.properties) f.properties = {};
                    f.properties.fillColor = color;
                });

                map.data.addGeoJson(data);

                // map.data.forEach(feature => {
                //     if (!feature.getProperty('source')) {
                //         feature.setProperty('source', url);
                //     }
                // });

                // // Set style khusus untuk fitur dari file ini
                // map.data.setStyle(function (feature) {
                //     if (feature.getProperty('source') === url) {
                //         return {
                //             fillColor: color,
                //             fillOpacity: 0.4,
                //             strokeColor: 'white',
                //             strokeWeight: 1
                //         };
                //     }
                // });
            });
    }

    loadDAS('/data/das_kapuas.json', 'green');
    loadDAS('/data/das_ws_pawan.json', '#ffc829');
    loadDAS('/data/das_ws_sambas.json', 'red');

    map.data.setStyle(function(feature) {
        const fillColor = feature.getProperty('fillColor') || 'gray';
        return {
            fillColor: fillColor,
            fillOpacity: 0.3,
            strokeColor: 'white',
            strokeWeight: 0.7
        };
    });

    map.data.addListener('click', function(event) {
        const name = event.feature.getProperty('name');
        new google.maps.InfoWindow({
            content: `<strong>${name}</strong>`,
            position: event.latLng
        }).open(map);
    });

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: jakarta }, (results, status) => {
        if (status === "OK" && results[0]) {
            let province = '';
            for (const component of results[0].address_components) {
                if (component.types.includes("administrative_area_level_1")) {
                    province = component.long_name;
                    break;
                }
            }

            const infowindow = new google.maps.InfoWindow({
                content: `<strong>${province}</strong>`,
            });
            infowindow.open(map);
        }
    });
}

$(document).ready(function() {
    loadAwlrLastReading();
    loadArrLastReading();
    loadAwlrArrLastReading();
    loadDeviceOffline();
    fetchSensorOfflineCount();
});

function loadAwlrLastReading() {
    getData(`/Home/GetAwlrLastReading`).then(res => {
        console.log("Respon API:", res);
        let result = res;

        if (result && result.metaData?.code === 200) {
            $.each(result.response, function (key, awlr_last_reading) {
                var contentStation = loadContentAwlrLastReading(awlr_last_reading);
                if($(`#card-station-${awlr_last_reading.id}`).length) {
                    $(`#card-station-${awlr_last_reading.id}`).html(contentStation);
                } else {
                    $('#body-awlr #awlr-body').append(`
                        <div class="card-station-awlr" data-ts-id="${awlr_last_reading.id}" id="card-station-${awlr_last_reading.id}" data-last-update="${(awlr_last_reading.reading_at == null) ? '' : moment(awlr_last_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}">
                            ${contentStation}
                        </div>
                    `);
                }

                if(awlr_last_reading.latitude != null && awlr_last_reading.longitude != null) {
                    const marker = new google.maps.Marker({
                        position: {
                            lat: parseFloat(awlr_last_reading.latitude),
                            lng: parseFloat(awlr_last_reading.longitude)
                        },
                        map: map,
                        title: awlr_last_reading.name,
                        icon: {
                            url: 'assets/img/awlr-marker.png', // Ganti dengan path ikonmu
                            scaledSize: new google.maps.Size(35, 50), // Ukuran ikon
                            anchor: new google.maps.Point(16, 32) // Titik bawah tengah
                        }
                    });

                    var warning_status_bar = '';
                    if(awlr_last_reading.siaga1 != null && awlr_last_reading.siaga2 != null && awlr_last_reading.siaga3 != null) {
                        warning_status_bar = `
                            <div class="progress-meter mt-2 mb-2">
                                <div class="meter meter-normal meter-left" style="width: 25%;" title="Normal <br> < 6 m"><span class="fw-normal meter-text" style="color: #4DC27E;">0</span></div>
                                <div class="meter meter-waspada meter-left" style="width: 25%;" title="Siaga 3 <br> ${awlr_last_reading.siaga3} ${awlr_last_reading.unit_display} - ${awlr_last_reading.siaga2} ${awlr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #FFDA4F;">${awlr_last_reading.siaga3} ${awlr_last_reading.unit_display}</span></div>
                                <div class="meter meter-siaga meter-left" style="width: 25%;" title="Siaga 2 <br> ${awlr_last_reading.siaga2} ${awlr_last_reading.unit_display} - ${awlr_last_reading.siaga1} ${awlr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #FFA600;">${awlr_last_reading.siaga2} ${awlr_last_reading.unit_display}</span></div>
                                <div class="meter meter-awas meter-left" style="width: 25%;" title="Siaga 1 <br> > ${awlr_last_reading.siaga1} ${awlr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #EF5350;">${awlr_last_reading.siaga1} ${awlr_last_reading.unit_display}</span></div>
                            </div>
                        `;
                    } else {
                        warning_status_bar = `<div class="progress-meter mt-2 mb-2">
                            <div class="meter meter-normal meter-left" style="width: 25%;" title="Normal <br> < 6 m"><span class="fw-normal meter-text" style="color: #4DC27E;">0</span></div>
                            <div class="meter meter-waspada meter-left" style="width: 25%;" title="Siaga 3 <br> 0 - 0"><span class="fw-normal meter-text" style="color: #FFDA4F;">0</span></div>
                            <div class="meter meter-siaga meter-left" style="width: 25%;" title="Siaga 2 <br> 0 - 0"><span class="fw-normal meter-text" style="color: #FFA600;">0</span></div>
                            <div class="meter meter-awas meter-left" style="width: 25%;" title="Siaga 1 <br> > 0"><span class="fw-normal meter-text" style="color: #EF5350;">0</span></div>
                        </div>`;
                    }

                    const contentHtml = `
                        <div style="font-family: 'Arial', sans-serif;
                            max-width: 280px;
                            font-size: 13px;
                            padding: 0;
                            margin: 0;
                            line-height: 1.3;">
                            <div style="font-size: 15px;
                                font-weight: bold;
                                margin: 0;
                                padding: 0;
                                line-height: 1;">
                                ${awlr_last_reading.name || 'Tanpa Nama'}
                            </div><br>

                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 6px;">
                                <tr>
                                    <td style="color: #555;">Device</td>
                                    <td style="text-align: right;">
                                        <div style="display: flex; justify-content: flex-end; align-items: center; gap: 6px;">
                                            <span>${awlr_last_reading.brand_name || '-'}</span>
                                            <span style="
                                                display: inline-block;
                                                background-color: #ffc107;
                                                color: #000;
                                                font-size: 11px;
                                                padding: 2px 6px;
                                                border-radius: 6px;
                                            ">
                                                ${awlr_last_reading.device_id || '-'}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #555;">Koordinat</td>
                                    <td style="text-align: right; padding-left: 8px;">
                                        ${parseFloat(awlr_last_reading.latitude).toFixed(6)}, ${parseFloat(awlr_last_reading.longitude).toFixed(6)}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #555;">Status</td>
                                    <td style="text-align: right;">
                                        <span style="
                                            display: inline-block;
                                            padding: 2px 6px;
                                            font-size: 12px;
                                            border-radius: 6px;
                                            background-color: ${awlr_last_reading.status === 'online' ? '#28a745' : '#6c757d'};
                                            color: white;
                                        ">
                                            ${awlr_last_reading.status === 'online' ? 'Online' : 'No Data'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #555;">Elevasi</td>
                                    <td style="text-align: right; font-weight: bold; font-size: 14px;">
                                        ${parseFloat(awlr_last_reading.water_level_elevation || 0).toFixed(1)} ${awlr_last_reading.unit_display}
                                    </td>
                                </tr>
                            </table>

                            ${warning_status_bar}<br>

                            <div style="display: flex; align-items: center; font-size: 12px; color: #555;">
                                <i class="far fa-clock" style="margin-right: 6px;"></i>
                                ${moment(awlr_last_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}
                            </div>
                        </div>
                        `;

                    const infowindow = new google.maps.InfoWindow({
                        content: contentHtml
                    });

                    marker.addListener("click", () => {
                        infowindow.open(map, marker);
                    });

                    google.maps.event.addListener(infowindow, 'domready', function () {
                        setTimeout(() => {
                            const iwOuter = document.querySelector('.gm-style-iw');
                            if (iwOuter) {
                                iwOuter.style.padding = '0px';
                                iwOuter.style.margin = '0px';

                                const iwInnerWrapper = iwOuter.parentElement;
                                if (iwInnerWrapper) {
                                    iwInnerWrapper.style.padding = '0px';
                                    iwInnerWrapper.style.margin = '0px';
                                }

                                const iwMainWrapper = iwInnerWrapper?.parentElement;
                                if (iwMainWrapper) {
                                    iwMainWrapper.style.padding = '0px';
                                    iwMainWrapper.style.marginTop = '0px';
                                }
                            }

                            const iwBackground = document.querySelector('.gm-style-iw-d');
                            if (iwBackground) {
                                iwBackground.style.margin = '0px';
                                iwBackground.style.padding = '0px';
                            }
                        }, 50); // Delay 50ms agar elemen benar-benar siap
                    });
                }
            });
            setTimeout(adjustPadding, 100);
        }
    }).catch(err => {
        console.log(err);
    });
}

function loadContentAwlrLastReading(awlr_last_reading) {
    let isOnline = false;
    let device_status = `<small class="mdi mdi-circle text-danger"></small> Offline`;
    const device_status_class = (device_status === 'Online') ? 'bg-success text-white' : 'bg-secondary text-white';


    if (awlr_last_reading.reading_at != null) {
        var readingAt = moment(awlr_last_reading.reading_at).format('YYYY-MM-DD HH:mm:ss');
        const currentTime = moment(); 
        const diffInHours = currentTime.diff(readingAt, 'hours');

        if (Math.abs(diffInHours) < 12) {
            isOnline = true;
            device_status = '<small class="mdi mdi-circle text-success"></small> Online';
        }
    }

    // Reading
    var wl_elevation_operator = awlr_last_reading.water_level_elevation > 0 ? '+' : '';
    var change_status = '';
    switch (awlr_last_reading.change_status) {
        case 'increase':
            change_status = '<i class="mdi mdi-arrow-up-circle text-danger me-1"></i>';
            break;
        case 'decrease':
            change_status = '<i class="mdi mdi-arrow-down-circle text-success me-1"></i>';
            break;
    }

    // Warning Status
    var class_warning_status = '';
    var warning_status = '-';
    switch (awlr_last_reading.warning_status) {
        case null:
            warning_status = '<span class="badge badge-awlr-nostatus rounded-1 ms-1 align-self-center">TANPA STATUS</span>';
            class_warning_status = 'bg-nostatus';
            break;
        case 'Normal':
            warning_status = '<span class="badge badge-awlr-normal rounded-1 ms-1 align-self-center">NORMAL</span>';
            class_warning_status = 'bg-normal';
            break;
        case 'Waspada':
            warning_status = '<span class="badge badge-awlr-siaga3 rounded-1 ms-1 align-self-center blinking-content">WASPADA</span>';
            class_warning_status = 'bg-siaga3';
            break;
        case 'Siaga':
            warning_status = '<span class="badge badge-awlr-siaga2 rounded-1 ms-1 align-self-center blinking-content">SIAGA</span>';
            class_warning_status = 'bg-siaga2';
            break;
        case 'Awas':
            warning_status = '<span class="badge badge-awlr-siaga1 rounded-1 ms-1 align-self-center blinking-content">AWAS</span>';
            class_warning_status = 'bg-siaga1';
            break;
    }

    if(awlr_last_reading.water_level == null) {
        warning_status = '-';
    }

    var water_level = awlr_last_reading.water_level != null ? ` ${awlr_last_reading.water_level.toFixed(2)} <small>${awlr_last_reading.unit_display}</small></h6>` : '-';
    var water_level_elevation = awlr_last_reading.water_level_elevation != null ? `${wl_elevation_operator}${awlr_last_reading.water_level_elevation} <sup>mdpl</sup>` : '-';

    if(awlr_last_reading.unitSensor == 'cmdpl' || awlr_last_reading.unitSensor == 'mdpl') {
        water_level_elevation = `${awlr_last_reading.water_level_elevation} <sup>mdpl</sup>`;
    }

    var debit = awlr_last_reading.debit != null ? `${awlr_last_reading.debit} <small>m<sup>3</sup>/s</small>` : '-';

    // Level Warning
    var warning_status_bar = '';
    if(awlr_last_reading.siaga1 != null && awlr_last_reading.siaga2 != null && awlr_last_reading.siaga3 != null) {
        warning_status_bar = `
            <div class="progress-meter mt-2 mb-2">
                <div class="meter meter-normal meter-left" style="width: 25%;" title="Normal <br> < 6 m"><span class="fw-normal meter-text" style="color: #4DC27E;">0</span></div>
                <div class="meter meter-waspada meter-left" style="width: 25%;" title="Siaga 3 <br> ${awlr_last_reading.siaga3} ${awlr_last_reading.unit_display} - ${awlr_last_reading.siaga2} ${awlr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #FFDA4F;">${awlr_last_reading.siaga3} ${awlr_last_reading.unit_display}</span></div>
                <div class="meter meter-siaga meter-left" style="width: 25%;" title="Siaga 2 <br> ${awlr_last_reading.siaga2} ${awlr_last_reading.unit_display} - ${awlr_last_reading.siaga1} ${awlr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #FFA600;">${awlr_last_reading.siaga2} ${awlr_last_reading.unit_display}</span></div>
                <div class="meter meter-awas meter-left" style="width: 25%;" title="Siaga 1 <br> > ${awlr_last_reading.siaga1} ${awlr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #EF5350;">${awlr_last_reading.siaga1} ${awlr_last_reading.unit_display}</span></div>
            </div>
        `;
    } else {
        warning_status_bar = `<div class="progress-meter mt-2 mb-2">
            <div class="meter meter-normal meter-left" style="width: 25%;" title="Normal <br> < 6 m"><span class="fw-normal meter-text" style="color: #4DC27E;">0</span></div>
            <div class="meter meter-waspada meter-left" style="width: 25%;" title="Siaga 3 <br> 0 - 0"><span class="fw-normal meter-text" style="color: #FFDA4F;">0</span></div>
            <div class="meter meter-siaga meter-left" style="width: 25%;" title="Siaga 2 <br> 0 - 0"><span class="fw-normal meter-text" style="color: #FFA600;">0</span></div>
            <div class="meter meter-awas meter-left" style="width: 25%;" title="Siaga 1 <br> > 0"><span class="fw-normal meter-text" style="color: #EF5350;">0</span></div>
        </div>`;
    }

    var battery = '';

    if(awlr_last_reading.battery != null) {
        if(awlr_last_reading.battery < 7) {
            battery = `<span><i class="mdi mdi-battery-charging-low ms-1" style="color: #F69696;"></i> ${awlr_last_reading.battery} Volt</span>`;
        } else {
            battery = `<span><i class="mdi mdi-battery-charging-high ms-1" style="color: #F69696;"></i> ${awlr_last_reading.battery} Volt</span>`;
        }
    }

    var reading_at = '';
    if(awlr_last_reading.reading_at != null) {
        const currentDate = moment().format('YYYY-MMM-DD'); 

        if(moment(awlr_last_reading.reading_at).locale('id').format("YYYY-MMM-DD") == currentDate) {
            reading_at = `Hari Ini, <span class="text-muted">${moment(awlr_last_reading.reading_at).format("HH:mm")}</span>`;
        } else {
            reading_at = moment(awlr_last_reading.reading_at).locale('id').format('D MMMM YYYY HH:mm');
        }
    }

    const card_header = `
        <div class="card-header">
            <div class="d-flex align-items-center">
                <h6 class="card-title text-uppercase text-station-name m-0">${awlr_last_reading.name}</h6>
                <span class="reading-at ms-auto">${reading_at}</span>
            </div>
        </div>`;

    return `<div class="card-station-awlr">
        <div class="card shadow-sm border-0 rounded-4 overflow-hidden animate__animated animate__fadeInUp" style="background: #f8f9fa;">
            <div class="card-body p-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex flex-column">
                        <strong class="fs-8">${awlr_last_reading.name}</strong>
                        <span class="text-muted small">${awlr_last_reading.device_id}</span> </div>
                    <div class="text-end">
                        <span class="badge ${class_warning_status} text-white py-2 px-3">${water_level}</span>
                    </div>
                </div>
 
                <div class="d-flex align-items-center text-muted small mb-3">
                    <i class="far fa-clock me-1"></i>
                    <span>${(awlr_last_reading.reading_at == null) ? '' : moment(awlr_last_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}</span>
                </div>

                <div class="warning-bar-container mt-2">
                    ${warning_status_bar}
                </div>
            </div>
        </div>
    </div>`;
}

function loadArrLastReading() {
    getData(`/Home/GetArrLastReading`).then(res => {
        console.log("Respon API arr:", res);
        let result = res;

        if(result && result.metaData?.code === 200) {
            $.each(result.response, function (key, arr_last_reading) {
                var contentStation = loadContentArrLastReading(arr_last_reading);
                if($(`#card-station-${arr_last_reading.id}`).length) {
                    $(`#card-station-${arr_last_reading.id}`).html(contentStation);
                } else {
                    $('#arr-body').append(`
                        <div class="card-station-arr" data-ts-id="${arr_last_reading.id}" id="card-station-${arr_last_reading.id}" data-last-update="${(arr_last_reading.reading_at == null) ? '' : moment(arr_last_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}">
                            ${contentStation}
                        </div>
                    `);
                }

                if(arr_last_reading.latitude != null && arr_last_reading.longitude != null) {
                    const marker = new google.maps.Marker({
                        position: {
                            lat: parseFloat(arr_last_reading.latitude),
                            lng: parseFloat(arr_last_reading.longitude)
                        },
                        map: map,
                        title: arr_last_reading.name,
                        icon: {
                            url: 'assets/img/arr-marker.png', // Ganti dengan path ikonmu
                            scaledSize: new google.maps.Size(45, 50), // Ukuran ikon
                            anchor: new google.maps.Point(16, 32) // Titik bawah tengah
                        }
                    });

                    const contentHtml = `
                        <div style="font-family: 'Arial', sans-serif;
                            max-width: 280px;
                            font-size: 13px;
                            padding: 0;
                            margin: 0;
                            line-height: 1.3;">
                            <div style="font-size: 15px;
                                font-weight: bold;
                                margin: 0;
                                padding: 0;
                                line-height: 1;">
                                ${arr_last_reading.name || 'Tanpa Nama'}
                            </div><br>

                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 6px;">
                                <tr>
                                    <td style="color: #555;">Device</td>
                                    <td style="text-align: right;">
                                        <div style="display: flex; justify-content: flex-end; align-items: center; gap: 6px;">
                                            <span>${arr_last_reading.brand_name || '-'}</span>
                                            <span style="
                                                display: inline-block;
                                                background-color: #ffc107;
                                                color: #000;
                                                font-size: 11px;
                                                padding: 2px 6px;
                                                border-radius: 6px;
                                            ">
                                                ${arr_last_reading.device_id || '-'}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #555;">Koordinat</td>
                                    <td style="text-align: right; padding-left: 8px;">
                                        ${parseFloat(arr_last_reading.latitude).toFixed(6)}, ${parseFloat(arr_last_reading.longitude).toFixed(6)}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #555;">Status</td>
                                    <td style="text-align: right;">
                                        <span style="
                                            display: inline-block;
                                            padding: 2px 6px;
                                            font-size: 12px;
                                            border-radius: 6px;
                                            background-color: ${arr_last_reading.status === 'online' ? '#28a745' : '#6c757d'};
                                            color: white;
                                        ">
                                            ${arr_last_reading.status === 'online' ? 'Online' : 'No Data'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #555;">Curah Hujan</td>
                                    <td style="text-align: right; font-weight: bold; font-size: 14px;">
                                        ${parseFloat(arr_last_reading.rainfall || 0).toFixed(1)} mm
                                    </td>
                                </tr>
                            </table>

                            <div style="display: flex; align-items: center; font-size: 12px; color: #555;">
                                <i class="far fa-clock" style="margin-right: 6px;"></i>
                                ${moment(arr_last_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}
                            </div>
                        </div>`;

                    const infowindow = new google.maps.InfoWindow({
                        content: contentHtml
                    });

                    marker.addListener("click", () => {
                        infowindow.open(map, marker);
                    });

                    google.maps.event.addListener(infowindow, 'domready', function () {
                        setTimeout(() => {
                            const iwOuter = document.querySelector('.gm-style-iw');
                            if (iwOuter) {
                                iwOuter.style.padding = '0px';
                                iwOuter.style.margin = '0px';

                                const iwInnerWrapper = iwOuter.parentElement;
                                if (iwInnerWrapper) {
                                    iwInnerWrapper.style.padding = '0px';
                                    iwInnerWrapper.style.margin = '0px';
                                }

                                const iwMainWrapper = iwInnerWrapper?.parentElement;
                                if (iwMainWrapper) {
                                    iwMainWrapper.style.padding = '0px';
                                    iwMainWrapper.style.marginTop = '0px';
                                }
                            }

                            const iwBackground = document.querySelector('.gm-style-iw-d');
                            if (iwBackground) {
                                iwBackground.style.margin = '0px';
                                iwBackground.style.padding = '0px';
                            }
                        }, 50); // Delay 50ms agar elemen benar-benar siap
                    });
                }
            });
        }
    }).catch(err => {
        console.log(err);
    });
}

function loadContentArrLastReading(arr_last_reading) {
    // Device
    let isOnline = false;
    let device_status = `<small class="mdi mdi-circle text-danger"></small> Offline`;

    if (arr_last_reading.reading_at != null) {
        var readingAt = moment(arr_last_reading.reading_at).format('YYYY-MM-DD HH:mm:ss');
        const currentTime = moment(); 

        const diffInHours = currentTime.diff(readingAt, 'hours');

        if (Math.abs(diffInHours) < 12) {
            isOnline = true;
            device_status = '<small class="mdi mdi-circle text-success"></small> Online';
        }
    }

    let intensity_per_hour = `
        <div class="d-flex justify-content-around align-items-center reading-text mb-1">
            <div class="col-4 text-center">
                -
            </div>
            <div class="col-4 text-center">
                -
            </div>
            <div class="col-4 text-center">
                -
            </div>
        </div>
        <div class="d-flex justify-content-around reading-text">
            <div class="col-4 text-center">
                Waktu
            </div>
            <div class="col-4 text-center">
                Curah Hujan
            </div>
            <div class="col-4 text-center fst-italic">
                Intensitas
            </div>
        </div>
    `;
    
    let intensity_hour = '';
    // Intensitas Per Jam
    if (arr_last_reading.intensity_last_hour != null) {
        intensity_hour = arr_last_reading.intensity_last_hour;
    }
    var blinking_class = '';

    if(arr_last_reading.intensity_last_hour != 'Tidak Ada Hujan' && isOnline) {
        blinking_class = 'blinking-content';
    }

    var rainfall = arr_last_reading.rainfall_last_hour != null ? ` ${arr_last_reading.rainfall_last_hour.toFixed(2)} <small>mm</small></h6>` : '-';

    if(arr_last_reading.rainfall_last_hour != null && arr_last_reading.intensity_last_hour != null) {
        intensity_per_hour = `
            <div class="d-flex justify-content-around align-items-center reading-text mb-1">
                <div class="col-4 text-center">
                    <h4 class="text-range-hour">${moment(arr_last_reading.reading_at).locale('id').format("HH:mm")}</h4>
                </div>
                <div class="col-4 text-center">
                    <h4>${arr_last_reading.rainfall_last_hour.toFixed(2)} <sup>mm</sup></h4>
                </div>
                <div class="col-4 col-intensity text-center">
                    <img class="${blinking_class}" src="/images/arr/${getIntensityIcon(arr_last_reading.intensity_last_hour)}" alt="${arr_last_reading.intensity_last_hour}">
                </div>
            </div>
            <div class="d-flex justify-content-around reading-text">
                <div class="col-4 text-center">
                    Waktu
                </div>
                <div class="col-4 text-center">
                    Curah Hujan
                </div>
                <div class="col-4 text-center fst-italic">
                    ${intensity_hour}
                </div>
            </div>
        `;
    }

    var battery = '';

    if(arr_last_reading.battery != null) {
        if(arr_last_reading.battery < 7) {
            battery = `<span><small class="mdi mdi-battery-charging-low ms-1" style="color: #F69696;"></small> ${arr_last_reading.battery} Volt</span>`;
        } else {
            battery = `<span><small class="mdi mdi-battery-charging-high ms-1" style="color: #F69696;"></small> ${arr_last_reading.battery} Volt</span>`;
        }
    }

    let reading_at = '';

    if(arr_last_reading.reading_at != null) {
        const currentDate = moment().format('YYYY-MMM-DD'); 

        if(moment(arr_last_reading.reading_at).locale('id').format("YYYY-MMM-DD") == currentDate) {
            reading_at = `Hari Ini`;
        } else {
            reading_at = moment(arr_last_reading.reading_at).locale('id').locale('id').format('D MMMM YYYY');
        }
    }

    const card_header = `
        <div class="card-header">
            <div class="d-flex align-items-center">
                <h6 class="card-title text-uppercase text-station-name m-0">${arr_last_reading.name}</h6>
                <span class="reading-at ms-auto">${reading_at}</span>
            </div>
        </div>`;

    return `<div class="card-station-arr">
        <div class="card shadow-sm border-0 rounded-4 overflow-hidden animate__animated animate__fadeInUp" style="background: #f8f9fa;">
            <div class="card-body p-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex flex-column">
                        <strong class="fs-8">${arr_last_reading.name}</strong>
                        <span class="text-muted small">${arr_last_reading.device_id}</span> </div>
                    <div class="text-end">
                        <span class="badge bg-normal text-white py-2 px-3">${rainfall}</span>
                    </div>
                </div>
 
                <div class="d-flex align-items-center text-muted small mb-3">
                    <i class="far fa-clock me-1"></i>
                    <span>${(arr_last_reading.reading_at == null) ? '' : moment(arr_last_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}</span>
                </div>
            </div>
        </div>
    </div>`;
}

function loadAwlrArrLastReading() {
    getData(`/Home/GetAwlrArrLastReading`).then(res => {
        console.log("Respon API arr:", res);
        let result = res;

        if(result && result.metaData?.code === 200) {
            $.each(result.response, function (key, last_reading) {
                var contentStation = loadContentAwlrArrLastReading(last_reading);
                if($(`#card-station-${last_reading.id}`).length) {
                    $(`#card-station-${last_reading.id}`).html(contentStation);
                } else {
                    $('#awlr-arr-body').append(`
                        <div class="card-station-awlr" data-ts-id="${last_reading.id}" id="card-station-${last_reading.id}" data-last-update="${(last_reading.reading_at == null) ? '' : moment(last_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}">
                            ${contentStation}
                        </div>
                    `);
                }

                if(last_reading.latitude != null && last_reading.longitude != null) {
                    
                }
            });
        }
    }).catch(err => {
        console.log(err);
    });
}

function loadContentAwlrArrLastReading(awlr_arr_last_reading) {
    let isOnline = false;
    let device_status = `<small class="mdi mdi-circle text-danger"></small> Offline`;

    if (awlr_arr_last_reading.reading_at != null) {
        var readingAt = moment(awlr_arr_last_reading.reading_at).format('YYYY-MM-DD HH:mm:ss');
        const currentTime = moment(); 
        const diffInHours = currentTime.diff(readingAt, 'hours');

        if (Math.abs(diffInHours) < 12) {
            isOnline = true;
            device_status = '<small class="mdi mdi-circle text-success"></small> Online';
        }
    }

    // Reading
    var wl_elevation_operator = awlr_arr_last_reading.water_level_elevation > 0 ? '+' : '';
    var change_status = '';
    switch (awlr_arr_last_reading.change_status) {
        case 'increase':
            change_status = '<i class="mdi mdi-arrow-up-circle text-danger me-1"></i>';
            break;
        case 'decrease':
            change_status = '<i class="mdi mdi-arrow-down-circle text-success me-1"></i>';
            break;
    }

    // Warning Status
    var class_warning_status = '';
    var warning_status = '-';
    switch (awlr_arr_last_reading.warning_status) {
        case null:
            warning_status = '<span class="badge badge-awlr-nostatus rounded-1 ms-1 align-self-center">TANPA STATUS</span>';
            class_warning_status = 'bg-nostatus';
            break;
        case 'Normal':
            warning_status = '<span class="badge badge-awlr-normal rounded-1 ms-1 align-self-center">NORMAL</span>';
            class_warning_status = 'bg-normal';
            break;
        case 'Waspada':
            warning_status = '<span class="badge badge-awlr-siaga3 rounded-1 ms-1 align-self-center blinking-content">WASPADA</span>';
            class_warning_status = 'bg-siaga3';
            break;
        case 'Siaga':
            warning_status = '<span class="badge badge-awlr-siaga2 rounded-1 ms-1 align-self-center blinking-content">SIAGA</span>';
            class_warning_status = 'bg-siaga2';
            break;
        case 'Awas':
            warning_status = '<span class="badge badge-awlr-siaga1 rounded-1 ms-1 align-self-center blinking-content">AWAS</span>';
            class_warning_status = 'bg-siaga1';
            break;
    }

    if(awlr_arr_last_reading.water_level == null) {
        warning_status = '-';
    }

    var water_level = awlr_arr_last_reading.water_level != null ? ` ${awlr_arr_last_reading.water_level.toFixed(2)} <small>${awlr_arr_last_reading.unit_display}</small></h6>` : '-';
    var water_level_elevation = awlr_arr_last_reading.water_level_elevation != null ? `${wl_elevation_operator}${awlr_arr_last_reading.water_level_elevation} <sup>mdpl</sup>` : '-';

    if(awlr_arr_last_reading.unitSensor == 'cmdpl' || awlr_arr_last_reading.unitSensor == 'mdpl') {
        water_level_elevation = `${awlr_arr_last_reading.water_level_elevation} <sup>mdpl</sup>`;
    }

    var debit = awlr_arr_last_reading.debit != null ? `${awlr_arr_last_reading.debit} <small>m<sup>3</sup>/s</small>` : '-';
    var rainfall = awlr_arr_last_reading.rainfall_last_hour != null ? ` ${awlr_arr_last_reading.rainfall_last_hour.toFixed(2)} <small>mm</small></h6>` : '-';
    // Location
    

    // Level Warning
    var warning_status_bar = '';
    if(awlr_arr_last_reading.siaga1 != null && awlr_arr_last_reading.siaga2 != null && awlr_arr_last_reading.siaga3 != null) {
        warning_status_bar = `
            <div class="progress-meter mt-2 mb-2">
                <div class="meter meter-normal meter-left" style="width: 25%;" title="Normal <br> < 6 m"><span class="fw-normal meter-text" style="color: #4DC27E;">0</span></div>
                <div class="meter meter-waspada meter-left" style="width: 25%;" title="Siaga 3 <br> ${awlr_arr_last_reading.siaga3} ${awlr_arr_last_reading.unit_display} - ${awlr_arr_last_reading.siaga2} ${awlr_arr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #FFDA4F;">${awlr_arr_last_reading.siaga3} ${awlr_arr_last_reading.unit_display}</span></div>
                <div class="meter meter-siaga meter-left" style="width: 25%;" title="Siaga 2 <br> ${awlr_arr_last_reading.siaga2} ${awlr_arr_last_reading.unit_display} - ${awlr_arr_last_reading.siaga1} ${awlr_arr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #FFA600;">${awlr_arr_last_reading.siaga2} ${awlr_arr_last_reading.unit_display}</span></div>
                <div class="meter meter-awas meter-left" style="width: 25%;" title="Siaga 1 <br> > ${awlr_arr_last_reading.siaga1} ${awlr_arr_last_reading.unit_display}"><span class="fw-normal meter-text" style="color: #EF5350;">${awlr_arr_last_reading.siaga1} ${awlr_arr_last_reading.unit_display}</span></div>
            </div>
        `;
    } else {
        warning_status_bar = `<div class="progress-meter mt-2 mb-2">
            <div class="meter meter-normal meter-left" style="width: 25%;" title="Normal <br> < 6 m"><span class="fw-normal meter-text" style="color: #4DC27E;">0</span></div>
            <div class="meter meter-waspada meter-left" style="width: 25%;" title="Siaga 3 <br> 0 - 0"><span class="fw-normal meter-text" style="color: #FFDA4F;">0</span></div>
            <div class="meter meter-siaga meter-left" style="width: 25%;" title="Siaga 2 <br> 0 - 0"><span class="fw-normal meter-text" style="color: #FFA600;">0</span></div>
            <div class="meter meter-awas meter-left" style="width: 25%;" title="Siaga 1 <br> > 0"><span class="fw-normal meter-text" style="color: #EF5350;">0</span></div>
        </div>`;
    }

    var battery = '-';

    if(awlr_arr_last_reading.battery != null) {
        battery = `<h4>${awlr_arr_last_reading.battery} <small>Volt</small><h4>`;
    }

    var reading_at = '';
    if(awlr_arr_last_reading.reading_at != null) {
        const currentDate = moment().format('YYYY-MMM-DD'); 

        if(moment(awlr_arr_last_reading.reading_at).locale('id').format("YYYY-MMM-DD") == currentDate) {
            reading_at = `Hari Ini, <span class="text-muted">${moment(awlr_arr_last_reading.reading_at).format("HH:mm")}</span>`;
        } else {
            reading_at = moment(awlr_arr_last_reading.reading_at).locale('id').format('D MMMM YYYY HH:mm');
        }
    }

    let intensity_per_hour = `
        <div class="d-flex justify-content-around align-items-center reading-text">
            <div class="col-4 text-center">
                -
            </div>
            <div class="col-4 text-center">
                -
            </div>
            <div class="col-4 text-center">
                ${battery}
            </div>
        </div>
        <div class="d-flex justify-content-around reading-text">
            <div class="col-4 text-center">
                Curah Hujan
            </div>
            <div class="col-4 text-center">
                Intensitas
            </div>
            <div class="col-4 text-center">
                Battery
            </div>
        </div>
    `;

    let intensity_hour = '';
    // Intensitas Per Jam
    if (awlr_arr_last_reading.intensity_last_hour != null) {
        intensity_hour = awlr_arr_last_reading.intensity_last_hour;
    }
    var blinking_class = '';

    if(awlr_arr_last_reading.intensity_last_hour != 'Tidak Ada Hujan' && isOnline) {
        blinking_class = 'blinking-content';
    }

    if(awlr_arr_last_reading.rainfall_last_hour != null && awlr_arr_last_reading.intensity_last_hour != null) {
        intensity_per_hour = `
            <div class="d-flex justify-content-around align-items-center reading-text mb-1">
                <div class="col-4 text-center">
                    ${battery}
                </div>
                <div class="col-4 text-center">
                    <h4>${awlr_arr_last_reading.rainfall_last_hour.toFixed(2)} <small>mm</small></h4>
                </div>
                <div class="col-4 col-intensity text-center">
                    <img class="${blinking_class}" src="/images/arr/${getIntensityIcon(awlr_arr_last_reading.intensity_last_hour)}" alt="${awlr_arr_last_reading.intensity_last_hour}">
                </div>
            </div>
            <div class="d-flex justify-content-around reading-text">
                <div class="col-4 text-center text-uppercase">
                    Battery
                </div>
                <div class="col-4 text-center text-uppercase">
                    Curah Hujan
                </div>
                <div class="col-4 text-center fst-italic">
                    ${intensity_hour}
                </div>
            </div>
        `;
    }

    const card_header = `
        <div class="card-header">
            <div class="d-flex align-items-center">
                <h4 class="card-title text-uppercase text-station-name m-0">${awlr_arr_last_reading.name}</h4>
                <span class="reading-at ms-auto">${reading_at}</span>
            </div>
        </div>
    `;

    return `<div class="card-station-awlr">
        <div class="card shadow-sm border-0 rounded-4 overflow-hidden animate__animated animate__fadeInUp" style="background: #f8f9fa;">
            <div class="card-body p-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex flex-column">
                        <strong class="fs-8">${awlr_arr_last_reading.name}</strong>
                        <span class="text-muted small">${awlr_arr_last_reading.device_id}</span> </div>
                    <div class="text-end d-flex flex-column align-items-end">
                        <span class="badge ${class_warning_status} text-white py-2 px-3" style="margin-bottom: 0.5rem;">${water_level}</span>
                        <span class="badge bg-normal text-white py-2 px-3">${rainfall}</span>
                    </div>
                </div>
 
                <div class="d-flex align-items-center text-muted small mb-3">
                    <i class="far fa-clock me-1"></i>
                    <span>${(awlr_arr_last_reading.reading_at == null) ? '' : moment(awlr_arr_last_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}</span>
                </div>

                <div class="warning-bar-container mt-2">
                    ${warning_status_bar}
                </div>
            </div>
        </div>
    </div>`;
}

function loadDeviceOffline() {
    getData(`/Home/GetSensorOffline`).then(res => {
        let result = res;
        
        if(result && result.metaData?.code === 200) {
            $.each(result.response, function(key, off_reading) {
                var contentStation = loadContentSensorOffline(off_reading);

                if($(`#card-offline-${off_reading.id}`).length) {
                    $(`#card-offline-${off_reading.id}`).html(contentStation);
                } else {
                    $('#sensorList').append(`
                        <div class="card-offline-device" data-ts-id="${off_reading.id}" id="card-offline-${off_reading.id}" data-last-update="${(off_reading.reading_at == null) ? '' : moment(off_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}">
                            ${contentStation}
                        </div>
                    `);
                }
            });
        }
    }).catch(err => {
        console.log(err);
    });
}

function loadContentSensorOffline(off_reading) {
    return `
        <div class="card shadow-sm border-0 rounded-4 overflow-hidden animate__animated animate__fadeInUp" style="background: #f8f9fa;">
            <div class="card-body p-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex flex-column">
                        <strong class="fs-8">${off_reading.name}</strong>
                        <span class="text-muted small">${off_reading.device_id}</span> 
                    </div>
                </div>
                <div class="d-flex align-items-center text-muted small mb-3">
                    <i class="far fa-clock me-1"></i>
                    <span>${(off_reading.reading_at == null) ? '' : moment(off_reading.reading_at).locale('id').format('YYYY-MM-DD HH:mm:ss')}</span>
                </div>
            </div>
        </div>
    `;
}


async function fetchSensorOfflineCount() {
    try {
        const response = await fetch('/Home/GetSensorOfflineCount');
        const data = await response.json();
        const jumlah = data?.jumlah ?? 0;
        document.getElementById('sensorCount').textContent = jumlah;
    } catch (error) {
        console.error('Gagal mengambil data sensor offline:', error);
    }
}

function getData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        });
}

function adjustPadding() {
    const footers = document.querySelectorAll('.footer');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Ensure there are corresponding footers and tab-panes
    footers.forEach((footer, index) => {
        const tabPane = tabPanes[index];
        if (footer && tabPane) {
            const footerHeight = footer.offsetHeight;
            tabPane.style.paddingBottom = `${footerHeight}px`;
        }
    });
}

function getIntensityIcon(status) {
    let timeOfDay = 'pagi';
    let momentjs = moment();
    momentjs.locale('id');

    momentjs.tz("Asia/Jakarta");

    let currentHour = momentjs.hours();

    if (currentHour >= 5 && currentHour < 10) {
        timeOfDay = 'pagi';
    } else if (currentHour >= 10 && currentHour < 17) {
        timeOfDay = 'siang';
    } else if (currentHour >= 17 && currentHour < 19) {
        timeOfDay = 'sore';
    } else {
        timeOfDay = 'malam';
    }

    let icon = 'berawan.png';

    switch (status) {
        case 'Berawan':
            icon = `berawan-${timeOfDay}.png`;
            break;
        case 'Hujan Ringan':
            icon = 'hujan-ringan.png';
            break;
        case 'Hujan Sedang':
            icon = 'hujan-sedang.png';
            break;
        case 'Hujan Lebat':
            icon = 'hujan-lebat.png';
            break;
        case 'Hujan Sangat Lebat':
            icon = 'hujan-sangat-lebat.png';
            break;
    }

    return icon;
}