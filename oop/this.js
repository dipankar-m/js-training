// global this returns global object
// console.log(this);

function x() {
  // value depends on strict/non-strict mode
  console.log(this);
}

// if the value of this keyword is undefined or null then this keyword represent global object
// only in non strict mode

x(); //if undefined --> converted to globalObj.x()

// this inside arrow function
const obj1 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj1.x();

// this inside nested arrow function
const obj = {
  a: 20,
  x: function () {
    const y = () => {
      // arrow functions doesnot have their own this binding
      console.log(this); // retains value of the enclosing lexical context
    };
    y();
  },
};

obj.x();
