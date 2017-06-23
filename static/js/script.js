var map, infoWindow;
function initMap() {
//map = new google.maps.Map(document.getElementById('mapa'), {
center =  {lat: -34.614292906, lng: -58.4591118497};
map = new google.maps.Map(document.getElementById('mapa'), {
center: center,
zoom: 6
});
infoWindow = new google.maps.InfoWindow;
// var center =  {lat: -34.397, lng: 150.644};
// try html5 geolocation.
if (navigator.geolocation) {
navigator.geolocation.getcurrentposition(function(position) {
var pos = {
  lat: position.coords.latitude,
  lng: position.coords.longitude
};

infowindow.setposition(pos);
infowindow.setcontent('location found.');
infowindow.open(map);

map.setcenter(pos);
}, function() {
handlelocationerror(true, infowindow, map.getcenter());
});
} else {
// browser doesn't support geolocation
handlelocationerror(false, infowindow, map.getcenter());
}



marker = new google.maps.marker({
  position: center,
  map: map,
  draggable: true,
});

google.maps.event.addlistener(marker, 'position_changed', function(){getmarkercoords(marker);});
}

//document.getElementById("form_coords").submit(function(e){
//    e.preventDefault())
//};



function handlelocationerror(browserhasgeolocation, infowindow, pos) {
infowindow.setposition(pos);
infowindow.setcontent(browserhasgeolocation ?
                  'error: the geolocation service failed.' :
                  'error: your browser doesn\'t support geolocation.');
infowindow.open(map);
}

function getmarkercoords(marker){
    var markercoords = marker.getposition();
    console.log(markercoords.lat()+ ' '+ markercoords.lng())
}
