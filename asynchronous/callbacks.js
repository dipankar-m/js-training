// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = pickNumbers(myNumbers, func);

const fooCall = pickNumbers(myNumbers, foo);
// (x) => x >= 0

function func(x) {
  // console.log(x);
  return x >= 0;
}

function foo(y) {
  return true;
}

// console.log(typeof func(2) === "undefined");

// Display Result
console.log(posNumbers);

function pickNumbers(numbers, callback) {
  const myArray = [];
  if (typeof callback(2) === "undefined") {
    // Added type check
    console.log("Callback doesnot return anything");
    return myArray;
  }
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }

  return myArray;
}
