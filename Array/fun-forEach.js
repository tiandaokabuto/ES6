var colors = ['red', 'green', 'blue'];
    // ES5 for
    for (let i = 0; i < colors.length; i++) {
      console.log(colors[i])
    }
    // ES6 forEach
    colors.forEach(function(color) {
      console.log(color)
    });