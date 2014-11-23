var five = require('johnny-five');
var board = five.Board();

board.on('ready', function(){

  var array = new five.Led.Array([3, 5, 6])

  this.repl.inject({
    array: array
  });

  array.pulse();
  console.log("Were all blinking!")
});