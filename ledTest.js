var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  var ledRed = new five.Led(3);
  var ledGreen = new five.Led(9);
  var ledYellow = new five.Led(13)

  ledRed.blink(2000);
  // ledGreen.pulse(1000);
  // ledYellow.strobe(150)

  this.wait(1000, function(){
     ledGreen.blink(1000);
  });

  this.wait(2000, function(){
    ledYellow.blink(1000);
  });

  console.log("Multiple lights man!");
});