// JSONファイル読み込み完了
function jsonRequest(json) {
    var data = [];
    if (json) {
        var n = json.length;
        for (var i = 0; i < n; i++) {
            data.push(json[i]);
        }
    }
    return data;
}

function initialize(data) {
    if (data) {
        var opts = {
            zoom: 15,
            center: new google.maps.LatLng(data[0].Latitude, data[0].Longitude),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), opts);
        var n = data.length;
        for (var i = 0; i < n; i++) {
            var dat = data[i];
            var obj = {
                position: new google.maps.LatLng(dat.Latitude, dat.Longitude),
                map: map

            };
            var marker = new google.maps.Marker(obj);
        }
    }
}
