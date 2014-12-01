var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){

  var motor = new five.Motor([5, 4]);
  motor.start();

});