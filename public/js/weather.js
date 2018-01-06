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
