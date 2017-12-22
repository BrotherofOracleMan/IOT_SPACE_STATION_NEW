var five = require("johnny-five");
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.hivemq.com');

var board = new five.Board();

//--VARIABLES--//
var led_red_value;
var led_green_value;
var led_yellow_value;
//--VARIABLES--//


client.on('connect', () => {
  console.log("slavenode1 connected");
  client.subscribe('slavenode1/led/led_red');
  client.subscribe('slavenode1/led/led_green');
  client.subscribe('slavenode1/led/led_yellow');
  client.publish('slavenode1/connected','true');
});


board.on("ready",function(){
  var red_led = new five.Led(7);
  var green_led = new five.Led(6);
  var yellow_led = new five.Led(5);

client.on('message', (topic, message) => {
  if(topic === 'slavenode1/led/led_red') {
    console.log("red led recieved");
    var led_red_value = (message.toString() === 'true'? true : false);
    console.log(led_red_value);
    if(led_red_value == true){
      console.log("red on");
      red_led.on();
    }else{
      red_led.off();
    }

  }
  if(topic === 'slavenode1/led/led_green'){
    console.log("green led recieved");
    var led_green_value = (message.toString() === 'true'? true : false);
    console.log(led_green_value);

    if(led_green_value == true){
      console.log("green on");
      green_led.on();
    }else{
      green_led.off();
      console.log("check2");
    }

  }
  if(topic === 'slavenode1/led/led_yellow'){
    console.log("yellow led recieved");
    var led_yellow_value = (message.toString() === 'true'? true: false);
    console.log(led_yellow_value);
    if(led_yellow_value == true){
      console.log("yellow on");
      yellow_led.on();
    }else{
      yellow_led.off();
    }
  }

});
  board.on("exit",function(){
      red_led.off();
      green_led.off();
      yellow_led.off();
    });
});
