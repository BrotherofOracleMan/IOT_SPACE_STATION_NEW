var map = L.map('map', {
  crs: L.CRS.Simple
});

var bounds = [[0, 0], [500, 500]];
var image = L.imageOverlay('assets/map.png', bounds).addTo(map);
map.fitBounds(bounds);


//map alerts
//1. get value from hardware (Rasp Pi)
//2. condition
//3. display notification marker on the map
//4. display notification in the box on the right side (along w/ timestamp)
//5. if urgent -> display notif on respective page / send FCM / Twilio

//Greenhouse
var soilMoistureMarker = L.latLng([150, 95]);
var soilTemperatureMarker = L.latLng([150, 175]);
var fan = L.latLng([75, 95]);
var waterPump = L.latLng([75, 175]);

//dummy values - to be replaced by actual values when hardware is done
var threshold = {
  moisture: 45,
  soilTemperatureWarm: 24,
  soilTemperatureCold: 17
}
var soilMoisture = 50;     //0 to 100
var soilTemperature = 22;  //10 to 30
//var soilHumidity;   //0 to 100
var fanOn = true;
var waterPumpOn = false;
var soilTemperatureRange;

if (soilTemperature > threshold.soilTemperatureWarm) {
  soilTemperatureRange = 'Hot';
} else if (soilTemperature > threshold.soilTemperatureCold) {
  soilTemperatureRange = 'Warm';
} else {
  soilTemperatureRange = 'Cold';
}

L.marker(soilMoistureMarker).addTo(map).bindPopup('Soil Moisture: ' + ((soilMoisture > threshold.moisture) ? 'Too much water' : 'Water the plants'));
L.marker(soilTemperatureMarker).addTo(map).bindPopup('Soil Temperature: ' + soilTemperatureRange);
L.marker(fan).addTo(map).bindPopup('Fan: ' + (fanOn ? 'On' : 'Off'));
L.marker(waterPump).addTo(map).bindPopup('Water Pump: ' + (waterPumpOn ? 'On' : 'Off'));

//spacehouse
var bulb1 = L.latLng([435, 325]);
var bulb2 = L.latLng([435, 425]);
var roof = L.latLng([350, 425]);
var bulb3 = L.latLng([315, 425])
var door = L.latLng([275, 425]);

//dummy values - to be replaced by actual values when hardware is done
var bulb1On = true;
var bulb2On = true;
var roofOn = false;
var bulb3On = false;
var doorOpen = false;

L.marker(bulb1).addTo(map).bindPopup('Bulb 1: ' + (bulb1On ? 'On' : 'Off'));
L.marker(bulb2).addTo(map).bindPopup('Bulb 2: ' + (bulb2On ? 'On' : 'Off'));
L.marker(roof).addTo(map).bindPopup('Roof: ' + (roofOn ? 'On' : 'Off'));
L.marker(bulb3).addTo(map).bindPopup('Bulb 3: ' + (bulb3On ? 'On' : 'Off'));
L.marker(door).addTo(map).bindPopup('Door: ' + (doorOpen ? 'Closed' : 'Open'));

//weather station
var humidityMarker = L.latLng([400, 80]);
var tempMarker = L.latLng([400, 110]);
var rainMarker = L.latLng([370, 95]);

//dummy values - to be replaced by actual values when hardware is done
var humidity = 20;  //0 to 100
var temp = 32;      //-40 to 80
var rain = 9;      //range unknown

var humidityRange;
var tempRange;
var rainStatus;

if (0 <= humidity && humidity < 20) {
  humidityRange = 'Very Dry';
} else if (20 <= humidity && humidity < 40) {
  humidityRange = 'Dry';
} else if (40 <= humidity && humidity < 60) {
  humidityRange = 'Mild';
} else if (60 <= humidity && humidity < 80) {
  humidityRange = 'Wet';
} else if (60 <= humidity && humidity < 100) {
  humidityRange = 'Very Wet';
} else {
  humidityRange = 'Out of range';
}

if (-40 <= temp && temp < -16) {
  tempRange = 'Freezing';
} else if (-16 <= temp && temp < 8) {
  tempRange = 'Cold';
} else if (8 <= temp && temp < 32) {
  tempRange = 'Warm';
} else if (32 <= temp && temp < 56) {
  tempRange = 'Hot';
} else if (56 <= temp && temp < 80) {
  tempRange = 'Very Hot';
} else {
  tempRange = 'Out of range';
}

if (rain < 1) {
  rainStatus = 'Not raining';
} else if (rain < 10) {
  rainStatus = 'raining lightly';
} else if (rain < 20) {
  rainStatus = 'raining heavily';
} else {
  tempRange = 'out of range';
}

L.marker(humidityMarker).addTo(map).bindPopup('Humidity: ' + humidityRange);
L.marker(tempMarker).addTo(map).bindPopup('Temperature: ' + tempRange);
L.marker(rainMarker).addTo(map).bindPopup('Rain Status: It is ' + rainStatus);
