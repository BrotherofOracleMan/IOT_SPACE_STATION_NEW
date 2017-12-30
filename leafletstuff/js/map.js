var map = L.map('mapid', {
    crs: L.CRS.Simple
});
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('3d.png', bounds).addTo(map);
map.fitBounds(bounds);

var marker = L.marker([200.5, 600]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I love 2d girls.").openPopup();
