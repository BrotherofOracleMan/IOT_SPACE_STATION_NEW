let bulbOn1 = false;
let bulbOn2 = false;
let bulbOn3 = false;

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
  if (bulbOn2) {
    bulb2.setAttribute('src', 'assets/bulb-lit.png');
    //light the LED
  } else {
    bulb2.setAttribute('src', 'assets/bulb.png');
    //turn off the LED
  }
  bulbOn2 = !bulbOn2;
});

bulb3.addEventListener('click', function() {
  if (bulbOn3) {
    bulb3.setAttribute('src', 'assets/bulb-lit.png');
    //light the LED
  } else {
    bulb3.setAttribute('src', 'assets/bulb.png');
    //turn off the LED
  }
  bulbOn3 = !bulbOn3;
});
