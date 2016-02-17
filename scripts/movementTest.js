var canvas = document.getElementById('canvas');

if (canvas.getContext) {
    // Grab our context
    var context = canvas.getContext('2d');

    // Make sure we have a valid defintion of requestAnimationFrame
    var requestAnimationFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function(callback) {
                return setTimeout(callback, 16);
            };

    // Let's define our square
    var square = {
        'x': 450,
        'y': 600,
        'width': 15,
        'height': 15,
        'fill': '#000000'
    };

    var render = function() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the square
        context.beginPath();
        context.rect(square.x, square.y, square.width, square.height);
        context.fillStyle = square.fill;
        context.fill();

        // Redraw
        requestAnimationFrame(render);
    };

    // Start the redrawing process
    render();

    var animate = function(prop, val, duration) {
      // The calculations required for the step function
      var start = new Date().getTime();
      var end = start + duration;
      var current = square[prop];
      var distance = val - current;

      var step = function() {
        // Get our current progres
        var timestamp = new Date().getTime();
        var progress = Math.min((duration - (end - timestamp)) / duration, 1);

        // Update the square's property
        square[prop] = current + (distance * progress);

        // If the animation hasn't finished, repeat the step.
        if (progress < 1) requestAnimationFrame(step);
      };

      // Start the animation
      return step();
    };

    var meta = function(e) {
        // Set some initial variables
        var distance = 100;
        var prop = 'x';
        var mult = 1;

        // Just return false if the key isn't an arrow key
        if (e.which < 37 || e.which > 40) {
            return false;
        };

        // If we're going left or up, we want to set the multiplier to -1
        if (e.which === 37 || e.which === 38) {
            mult = -1;
        }

        // If we're going up or down, we want to change the property we will be animating.
        if (e.which === 38 || e.which === 40) {
            prop = 'y';
        };

        return [prop, mult * distance];
    };

    document.body.addEventListener('keydown', function(e) {
        var info = meta(e);
        if (info) {
            e.preventDefault();
            animate(info[0], square[info[0]] + info[1], 1000);
        };
    });

    document.body.addEventListener('keyup', function(e) {
        var info = meta(e);

        if (info) {
            e.preventDefault();
            animate(info[0], square[info[0]], 1000);
        };
    });
};
