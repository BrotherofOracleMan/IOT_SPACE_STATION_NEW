var socket = io();
var green = 0; //0 is off
var yellow = 0;
var red = 0;
var photoresistor_value = 0;
//helper functions

function emit_led_value(){
  socket.emit('led_states',{
    red:red,
    green:green,
    yellow:yellow
  },function(data){
    console.log("Led States sent");
  });
}
socket.on('photoresistor_value',function(valueobj){
  console.log("Event called")
  $('#changing_value').text(valueobj.value.toString());
});

$('#green').click(function(){
  //listener for button
  if(green == 0){
    $('#green').text('LED ON');
    green = 1;
    emit_led_value(red,green,yellow);
  }
  else{
    $('#green').text('LED OFF');
    green = 0;
    emit_led_value(red,green,yellow);
  }
});

$('#yellow').click(function(){
  if(yellow == 0){
    $('#yellow').text('LED ON');
    yellow = 1;
    emit_led_value(red,green,yellow);
  }
  else{
    $('#yellow').text('LED OFF');
    yellow = 0;
    emit_led_value(red,green,yellow);
  }
});

$('#red').click(function(){
  if(red == 0){
    $('#red').text('LED ON');
    red = 1;
    emit_led_value(red,green,yellow);
  }
  else{
    $('#red').text('LED OFF');
    red = 0;
    emit_led_value(red,green,yellow);
  }
});

/*
setInterval(function(){
    photoresistor_value = photoresistor_value + 2;
    if(photoresistor_value != 500){
      console.log("ADDED");
      $('#changing_value').text(photoresistor_value.toString());
    }else{
      photoresistor_value = 0;
      $('#changing_value').text('0');
    }
},3000);
*/
