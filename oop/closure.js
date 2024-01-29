function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function () {
    return hatchedEgg;
  };
}

Bird.prototype.num = 1;

let ducky = new Bird();
console.log(ducky.hatchedEgg);
// ducky.num = 2; //changed

// console.log(ducky.num);
