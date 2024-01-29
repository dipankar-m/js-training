const myNumbers = [4, true, -20, "hi", 5, 9, -6];

const posNumbers = pickNumbers(myNumbers, func);

function func(x) {
  // console.log(x);
  return x >= 0;
}

function foo(x) {
  return true;
}

console.log(posNumbers);

function pickNumbers(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (
      callback(x) &&
      typeof callback(x) != "undefined" &&
      typeof x == "number"
    ) {
      myArray.push(x);
    }
  }

  return myArray;
}
