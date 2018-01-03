var map = L.map('map', {
  crs: L.CRS.Simple
});

var bounds = [[0, 0], [500, 500]];
var image = L.imageOverlay('assets/map.png', bounds).addTo(map);
map.fitBounds(bounds);

//notification markers
// var sol = L.latLng([ 145, 175.2 ]);
// L.marker(sol).addTo(map);
// map.setView( [70, 120], 1);
