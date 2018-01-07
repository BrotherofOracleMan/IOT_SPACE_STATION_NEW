//gauges: https://www.jqwidgets.com/jquery-widgets-demo/demos/jqxgauge/index.htm
$('#pressure-gauge').jqxGauge({
 		 min: 300,
     max: 1100,
     colorScheme: 'scheme03',
     caption: {
     		value: '1019 hPa',
        position: 'bottom',
        offset: [0, 0],
        visible: true
     },
     style: {
     		fill: '#000000',
        stroke: '#ffffff'
     },
     ranges: [{
         startValue: 300,
         endValue: 1100,
         style: {
             fill: '#000000',
             stroke: '#000000'
         },
         endWidth: 10,
         startWidth: 10
     }],
     labels: {
     		 distance: '40%',
     		 interval: 100
     },
     ticksMinor: {
         visible: false
     },
     ticksMajor: {
         interval: 100,
         size: '10%',
     },
     width: '65%',
     value: 300,
     animationDuration: 500,
     border: {
     		 size: '7.5%',
         style: { stroke: '#ffffff', fill: '#ffffff'},
         visible: true,
         showGradient: false
     }
});
$('#pressure-gauge').jqxGauge({
     value: 500
});

//carousels
$(document).ready(function(){
  $('.carousel').carousel();
});
$('.carousel.carousel-slider').carousel({fullWidth: true});

//Google charts
const airTempChart_hour = document.getElementById('air-temperature-chart-hour');
const airHumidityChart_hour = document.getElementById('air-humidity-chart-hour');
const airPressureChart_hour = document.getElementById('air-pressure-chart-hour');

const airTempChart_day = document.getElementById('air-temperature-chart-day');
const airHumidityChart_day = document.getElementById('air-humidity-chart-day');
const airPressureChart_day = document.getElementById('air-pressure-chart-day');

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawAirTempChart_hour);
google.charts.setOnLoadCallback(drawAirHumidityChart_hour);
google.charts.setOnLoadCallback(drawAirPressureChart_hour);

google.charts.setOnLoadCallback(drawAirTempChart_day);
google.charts.setOnLoadCallback(drawAirHumidityChart_day);
google.charts.setOnLoadCallback(drawAirPressureChart_day);

function drawAirTempChart_hour() {  draw(airTempChart_hour, 'Temperature - Past Hour', '°C'); }
function drawAirHumidityChart_hour() { draw(airHumidityChart_hour, 'Humidity - Past Hour', '%'); }
function drawAirPressureChart_hour() { draw(airPressureChart_hour, 'Pressure - Past Hour', 'hPa'); }

function drawAirTempChart_day() {  draw(airTempChart_day, 'Temperature - Past Day', '°C'); }
function drawAirHumidityChart_day() { draw(airHumidityChart_day, 'Humidity - Past Day', '%'); }
function drawAirPressureChart_day() { draw(airPressureChart_day, 'Pressure - Past Day', 'hPa'); }

function draw(chartDiv, title, units, data) {      //swap fakeData w/ actual data
  let fakeData = new google.visualization.arrayToDataTable([
    ['Day', 'Fake'],
    ['1', 80.1],
    ['2', 79.2],
    ['3', 75.2],
    ['4', 82.9],
    ['5', 81.8]
  ]);
  let options = {
		title: title,
		curveType: 'function',
		width: chartDiv.getAttribute('width'),
		height: chartDiv.getAttribute('height'),
		fontName: 'Roboto',
		fontSize: 12,
		colors: [chartDiv.parentNode.parentNode.parentNode.previousElementSibling.style.backgroundColor],
		vAxis: {
			title: units,
			textStyle: {
				color: '#757575'
			},
			titleTextStyle: {
				color: '#757575'
			}
		},
		hAxis: {
			title: 'time (h)',
			textStyle: {
				color: '#757575'
			},
			titleTextStyle: {
				color: '#757575'
			}
		},
		backgroundColor: { fill:'transparent' }
	};

  let chart = new google.visualization.LineChart(chartDiv);
	chart.draw(fakeData, options);
}
