/*
The MIT License (MIT)

Copyright (c) 2017 Bernard Kobos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//charts

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawSoilMoistureChart);
// google.charts.setOnLoadCallback(drawSoilTemperatureChart);
// google.charts.setOnLoadCallback(drawSoilHumidityChart);

// //modularize this later
// function drawSoilMoistureChart() {
// 	var moisture = new google.visualization.arrayToDataTable([
// 		['Day', 'Moisture'],
// 		['1', 80.1],
// 		['2', 79.2],
// 		['3', 75.2],
// 		['4', 82.9],
// 		['5', 81.8]
// 	]);
// 	//instantiate charts
// 	var options = {
// 		title:'Soil Moisture',
// 		curveType: 'function',
// 		width: window.innerWidth / 3,
// 		height: window.innerHeight / 2
// 	};
// 	var chart = new google.visualization.LineChart(document.getElementById(''));
// 	chart.draw(moisture, options);
// }
// 	function drawSoilTemperatureChart() {
// 		var temp = new google.visualization.arrayToDataTable([
// 			['Day', 'Temperature'],
// 			['1', 24.3],
// 			['2', 24.0],
// 			['3', 23.9],
// 			['4', 24.1],
// 			['5', 24.2]
// 		]);
// 		//instantiate charts
// 		var options = {
// 			title:'Soil Temperature',
// 			curveType: 'function',
// 			width: window.innerWidth / 3,
// 			height: window.innerHeight / 2
// 		};
// 		var chart = new google.visualization.LineChart(document.getElementById(''));
// 		chart.draw(temp, options);
// }
// function drawSoilHumidityChart() {
// 	var humidity = new google.visualization.arrayToDataTable([
// 		['Day', 'Humidity'],
// 		['1', 89],
// 		['2', 90],
// 		['3', 91],
// 		['4', 88],
// 		['5', 92]
// 	]);
// 	//instantiate charts
// 	var options = {
// 		title:'Soil Humidity',
// 		curveType: 'function',
// 		width: window.innerWidth / 3,
// 		height: window.innerHeight / 2
// 	};
// 	var chart = new google.visualization.LineChart(document.getElementById(''));
// 	chart.draw(humidity, options);
// }

//carousels
$(document).ready(function(){
  $('.carousel').carousel();
});
$('.carousel.carousel-slider').carousel({fullWidth: true});

//angular gauges
var optsMoisture = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.55, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.8, // // Relative to gauge radius
    strokeWidth: 0.020, // The thickness
    color: '#fff' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
 //  staticLabels: {
 //  	font: "20px Roboto",  // Specifies font - make white later
	// labels: [33, 67],  // Print labels at these values - values need more research
	// fractionDigits: 1  // Optional: Numerical precision. 0=round off.
 //  },
  staticZones: [
   {strokeStyle: "#D50000", min: 0, max: 33},
   {strokeStyle: "#FFDD00", min: 33, max: 67},
   {strokeStyle: "#64DD17", min: 67, max: 100}
  ],
  highDpiSupport: true     // High resolution support
};

var target = document.getElementById('soil-moisture'); // your canvas element
var moistureGauge = new Gauge(target).setOptions(optsMoisture); // create sexy gauge!
moistureGauge.maxValue = 100; // set max gauge value
moistureGauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
moistureGauge.animationSpeed = 32; // set animation speed (32 is default value)
moistureGauge.set(80.1); // set actual value - do this programatically later

target.style.width = '100%';
target.style.height = '100%';


var optsTemp = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.55, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.8, // // Relative to gauge radius
    strokeWidth: 0.020, // The thickness
    color: '#fff' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  staticZones: [
   {strokeStyle: "#D50000", min: 0, max: 10},
   {strokeStyle: "#FFDD00", min: 10, max: 20},
   {strokeStyle: "#64DD17", min: 20, max: 30}
  ],
  highDpiSupport: true     // High resolution support
};

var targetTemp = document.getElementById('soil-temperature'); // your canvas element
var tempGauge = new Gauge(targetTemp).setOptions(optsTemp); // create sexy gauge!
tempGauge.maxValue = 30; // set max gauge value
tempGauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
tempGauge.animationSpeed = 32; // set animation speed (32 is default value)
tempGauge.set(16.4); // set actual value - do this programatically later

targetTemp.style.width = '100%';
targetTemp.style.height = '100%';



var optsHumid = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.55, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.8, // // Relative to gauge radius
    strokeWidth: 0.020, // The thickness
    color: '#fff' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  staticZones: [
   {strokeStyle: "#64DD17", min: 0, max: 33},
   {strokeStyle: "#FFDD00", min: 33, max: 67},
   {strokeStyle: "#D50000", min: 67, max: 100}
  ],
  highDpiSupport: true     // High resolution support
};

var targetHumid = document.getElementById('humidity'); // your canvas element
var humidGauge = new Gauge(targetHumid).setOptions(optsHumid); // create sexy gauge!
humidGauge.maxValue = 100; // set max gauge value
humidGauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
humidGauge.animationSpeed = 32; // set animation speed (32 is default value)
humidGauge.set(89); // set actual value - do this programatically later

targetHumid.style.width = '100%';
targetHumid.style.height = '100%';

//change style of dashboard based on current greenhouse values (bkgd of panel) programmatically
