var Trogdor = function(top, left, timeBetweenSteps){
  CircleDancer.call(this, top, left, timeBetweenSteps);
  this.radians = 0;
  this.sizeModifier = 5;
  this.$node = $('<div class="trogdor dancer"><img src="images/trogdor.png" alt="Trogdor" width=300></div>');
};

Trogdor.prototype = Object.create(CircleDancer.prototype);
Trogdor.prototype.constructor = Trogdor;
// debugger

var makeTrogdor = function(top, left, timeBetweenSteps){
  var trogdor = new Trogdor(top, left, timeBetweenSteps);

  window.dancers.push(trogdor);
  trogdor.setPosition(top, left);
  trogdor.step();

  return trogdor;
};