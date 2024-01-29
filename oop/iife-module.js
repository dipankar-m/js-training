// Two Mixins created earlier
function glideMixin(obj) {
  obj.glide = function () {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
}

//We can group the above mixins into a module
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    },
  };
})();
