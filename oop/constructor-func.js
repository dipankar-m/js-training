//ES5
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

//ES6
class Bird1 {
  constructor() {
    this.name = "Bob";
    this.color = "Peach";
    this.numLegs = 2;
  }

  sayhello() {
    console.log(this.name, this.color, this.numLegs);
  }
}

// Bird.prototype.eat = function() {
//   console.log("nom nom nom");
// }

// Bird.prototype.describe = function() {
//   console.log("My name is " + this.name);
// }

//Ideal way to define prototype props.
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

const bird = new Bird();
console.log(Bird.prototype.isPrototypeOf(bird));

const bird1 = new Bird1();
bird1.sayhello();
