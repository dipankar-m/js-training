setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}

// In the example above, myFunction is used as a callback.

// myFunction is passed to setInterval() as an argument.

// 1000 is the number of milliseconds between intervals, so myFunction() will be called e
// very second.
