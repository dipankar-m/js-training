function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

// let animal = new Animal(); // not recommended

let animal = Object.create(Animal.prototype); //recommended

// animal.eat();
// console.log(animal instanceof Animal);

function Bird() {}
Bird.prototype = Object.create(Animal.prototype); //creating prototype of child inheriting
//parent's prototype
// This also sets the constructor property of Bird to that of Animal
// Hence we need to manually add Bird.prototype.constructor = Bird.

let duck = new Bird("Donald");
console.log(duck.constructor);
duck.eat();
//duck inherits all of Animal's properties, including the eat method.

//Unique property of Bird
Bird.prototype.fly = function () {
  console.log("I'm flying!");
};

// Overriding parent properties.
Bird.prototype.eat = function () {
  // JS looks for methods in order: duck->Bird->Animal->Object
  console.log("nom nom nom");
};
