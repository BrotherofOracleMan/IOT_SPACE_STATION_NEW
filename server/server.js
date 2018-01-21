const http = require('http');
const path = require('path');
const express = require('express');
var io = require('socket.io')(server);

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');

/*
The topics for mqtt
  slavenode1/led/led_red
  slavenode1/led/green_led
  slavenode1/led/yellow_led
  slavenode1/photoresistor
  slavenode1/connected
*/

//--VARIABLES FOR USAGE--//
var connected = false;
var photoresistor_value = 0;
var photoresistor_value_change = false;
//--VARIABLES FOR USAGE--//

app.use(express.static(publicPath));

client.on('connect',()=>{
  console.log("Server connected to slavenode1")
  client.subscribe('slavenode1/connected');
  client.subscribe('slavenode1/photoresistor');
});

client.on('message',(topic,message) => {
    switch (topic) {
      case 'slavenode1/photoresistor':
        handle_photo_resistor_value(message);
      break;

      case 'slavenode1/connected':
        OnConnect();
      break;

      default:
        console.log('No such message written yet for event ');
      break;
    }
});

//handle the events from the front end here
io.on('connection', (socket) => {
  setInterval(function(){
    socket.emit('photoresistor_value',{
    photoresistor_value:photoresistor_value
  });
},500);
  socket.on('led_states',function(led_states){
     console.log("change_led_state");
     console.log(led_states);
     if(led_states.green == 1){
       client.publish('slavenode1/led/led_green','true');
       console.log("Green Led emit");
     }
     else{
       client.publish('slavenode1/led/led_green','false');
       console.log('green off');
     }
     if(led_states.red == 1){
       console.log('Red led emit');
       client.publish('slavenode1/led/led_red','true');
     }
     else{
       console.log('Red off')
       client.publish('slavenode1/led/led_red','false');
     }
     if(led_states.yellow == 1){
       client.publish('slavenode1/led/led_yellow','true');
       console.log('Yellow led emit');
     }
     else{
       client.publish('slavenode1/led/led_yellow','false');
       console.log('yellow led off');
     }
  });

  //Greenhouse
  socket.on('greenhouse/pump_on', () => {
    //turn pump on
  });
  socket.on('greenhouse/pump_off', () => {
    //turn pump off
  })
  socket.on('greenhouse/fans_on', () => {
    //turn fans on
  });
  socket.on('greenhouse/fans_off', () => {
    //turn fans off
  });
  // greenhouse/moisture
  // greenhouse/humidity
  // greenhouse/temperature
  // greenhouse/photoresistor

});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

client.on('close',()=>{
  console.log('MQTT broker is going to close');
});

function handle_photo_resistor_value(message){
  photoresistor_value = parseInt(message);
  console.log(photoresistor_value);
  photoresistor_value_change = true;
}

function OnConnect(){
    connected = true;
    console.log('slavenode1 is connected');
}
function SendPhotoResistorData()
{
let shouldCancel = false;
 if (!shouldCancel) {
   setTimeout(thingToRepeat, 1000);
 }
}
