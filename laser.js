var five = require("johnny-five"),
  board, laser;

board = new five.Board();

board.on("ready", function() {

  laser = new five.Led(9);

  board.repl.inject({
    laser: laser
  });
  console.log("node")
});