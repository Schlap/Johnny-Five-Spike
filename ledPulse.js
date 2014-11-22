var five  = require('johnny-five');

var board = new five.Board();

board.on('ready', function(){
  // create a standard LED hardware instance
  var led = new five.Led({
    // Use PWM pin 9 for fading example
    pin: 9
  });

  // pinMode is set to OUTPUT by default

  // Inject the led hardware into
  // the Repl instance's context;
  // allows direct command line access

  board.repl.inject({
    led: led
  });

  // "pulse" the led in a looping interval
  // interval defaults to 1000ms
  // pin mode will be changed to PWM automatically
  led.pulse();

  //Turn off the led pulse loop after 10 seconds shwn in ms

  this.wait(10000, function() {
    led.stop().off();
  });
  console.log("I'm pulsing!")
});