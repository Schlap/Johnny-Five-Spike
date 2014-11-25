var five = require("johnny-five"),
  board, motor, led;

board = new five.Board();

board.on("ready", function() {
  // Create a new `motor` hardware instance.
  motor = new five.Motor({
    pin: 5
  });

  motor1 = new five.Motor({
    pin: 6
  });

  motor2 = new five.Motor({
    pin: 3 
  });

  motor3 = new five.Motor({
    pin: 9
  });
  // Inject the `motor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    motor: motor,
    motor1: motor1,
    motor2: motor2,
    motor3: motor3
  });

  // Motor Event API

  //Motor 0
  //------------------------------------------------------
  // "start" events fire when the motor is started.
  motor.on("start", function(err, timestamp) {
    console.log("start", timestamp);

    // Demonstrate motor stop in 2 seconds
    board.wait(2000, function() {
      motor.stop();
    });
  });

  // "stop" events fire when the motor is started.
  motor.on("stop", function(err, timestamp) {
    console.log("stop", timestamp);
  });

  //Motor1
  //------------------------------------------------------

  motor1.on("start", function(err, timestamp) {
    console.log("start", timestamp);

    // Demonstrate motor stop in 2 seconds
    board.wait(2000, function() {
      motor1.stop();
    });
  });

  // "stop" events fire when the motor is started.
  motor1.on("stop", function(err, timestamp) {
    console.log("stop", timestamp);
  });

  //Motor2
  //------------------------------------------------------

  motor2.on("start", function(err, timestamp) {
    console.log("start", timestamp);

    // Demonstrate motor stop in 2 seconds
    board.wait(2000, function() {
      motor2.stop();
    });
  });

  // "stop" events fire when the motor is started.
  motor2.on("stop", function(err, timestamp) {
    console.log("stop", timestamp);
  });

  //Motor3
  //--------------------------------------------------------

  motor3.on("start", function(err, timestamp) {
    console.log("start", timestamp);

    // Demonstrate motor stop in 2 seconds
    board.wait(2000, function() {
      motor3.stop();
    });
  });

  // "stop" events fire when the motor is started.
  motor3.on("stop", function(err, timestamp) {
    console.log("stop", timestamp);
  });

  // Motor API

  // start([speed)
  // Start the motor. `isOn` property set to |true|
  // Takes an optional parameter `speed` [0-255]
  // to define the motor speed if a PWM Pin is
  // used to connect the motor.
  motor.start();
  motor1.start();
  motor2.start();
  motor3.start();

  // stop()
  // Stop the motor. `isOn` property set to |false|
});