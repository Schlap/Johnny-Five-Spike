five = require('johnny-five');
board = new five.Board();

board.on('ready', function(){
// Create an LED on pin 13
var led = new five.Led(13);

led.strobe(50);
console.log("I'm blinking!")
});