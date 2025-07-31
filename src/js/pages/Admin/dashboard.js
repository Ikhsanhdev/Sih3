let map;
function initMap() {
    const jakarta = { lat: 0.1, lng: 111 };

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
    fetchSensorOfflineCount();
    fetchSensorCount();
    loadAwlrLastReading();
    loadArrLastReading();
});

function loadAwlrLastReading() {
    getData(`/Home/GetAwlrLastReading`).then(res => {
        console.log("Respon API:", res);
        let result = res;

        if (result && result.metaData?.code === 200) {
            $.each(result.response, function (key, awlr_last_reading) {

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
                }
            });
        }
    }).catch(err => {
        console.log(err);
    });
}

function loadArrLastReading() {
    getData(`/Home/GetArrLastReading`).then(res => {
        console.log("Respon API arr:", res);
        let result = res;

        if(result && result.metaData?.code === 200) {
            $.each(result.response, function (key, arr_last_reading) {

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
                }
            });
        }
    }).catch(err => {
        console.log(err);
    });
}

async function fetchSensorOfflineCount() {
    try {
        const response = await fetch('/Home/GetSensorOfflineCount');
        const data = await response.json();
        const jumlah = data?.jumlah ?? 0;
        document.getElementById('total-offline').textContent = jumlah;
    } catch (error) {
        console.error('Gagal mengambil data sensor offline:', error);
    }
}

async function fetchSensorCount() {
    try {
        const response = await fetch('/Home/GetSensorCount');
        const data = await response.json();
        const awlr = data?.awlr ?? 0;
        const arr = data?.arr ?? 0;
        const awlr_arr = data?.awlr_arr ?? 0;
        document.getElementById('total-awlr').textContent = awlr;
        document.getElementById('total-arr').textContent = arr;
        document.getElementById('total-awlr-arr').textContent = awlr_arr;
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