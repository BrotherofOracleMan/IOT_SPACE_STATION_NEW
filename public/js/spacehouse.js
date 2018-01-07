let bulbOn1 = false;
let bulbOn2 = false;
let bulbOn3 = false;

let roofOn = false;
let doorOpen = false;

let floorplan = document.getElementById('floorplan');

let bulb1 = document.getElementById('bulb1');
let bulb2 = document.getElementById('bulb2');
let bulb3 = document.getElementById('bulb3');

bulb1.addEventListener('click', function() {
  if (!bulbOn1) {
    bulb1.setAttribute('src', 'assets/bulb-lit.png');
    //light the LED
  } else {
    bulb1.setAttribute('src', 'assets/bulb.png');
    //turn off the LED
  }
  bulbOn1 = !bulbOn1;
});

bulb2.addEventListener('click', function() {
  if (!bulbOn2) {
    bulb2.setAttribute('src', 'assets/bulb-lit.png');
    //light the LED
  } else {
    bulb2.setAttribute('src', 'assets/bulb.png');
    //turn off the LED
  }
  bulbOn2 = !bulbOn2;
});

bulb3.addEventListener('click', function() {
  if (!bulbOn3) {
    bulb3.setAttribute('src', 'assets/bulb-lit.png');
    //light the LED
  } else {
    bulb3.setAttribute('src', 'assets/bulb.png');
    //turn off the LED
  }
  bulbOn3 = !bulbOn3;
});

let door = document.getElementById('door');
let roof = document.getElementById('roof');
let roofBtn = document.querySelector('#roof-switch input');

roofBtn.addEventListener('change', function() {
  if (!roofOn) {
    roof.removeAttribute('hidden');
    //close roof
  } else {
    roof.setAttribute('hidden', 'true');
    //move roof away
  }
  roofOn = !roofOn;
});

door.addEventListener('click', function() {
  if (!doorOpen) {
    //change image
    floorplan.setAttribute('src', 'assets/spacehouse-door-open.png');
    //open door
  } else {
    //change image
    floorplan.setAttribute('src', 'assets/spacehouse-door-closed.png');
    //close door
  }
  doorOpen = !doorOpen;
});
