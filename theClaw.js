var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){

  var claw = new five.Servo({
    pin: 12,
    range: [0, 180],
    center: true,
  });

  var arm = new five.Servo({
    pin: 13,
    range: [0, 180],
    center: true,
  });

  this.repl.inject({
    claw: claw,
    arm: arm

  });

});