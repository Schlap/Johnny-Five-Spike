var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  
  // create LED pin
  var ledGreen = five.Led(3);
  var ledRed = five.Led(6);
  var ledYellow = five.Led(13)

  ledGreen.blink(1000);

  this.wait(1000, function(){
    ledRed.blink(1000)
  });

  console.log("Multiple lights");
});