var Romney = function(top, left, timeBetweenSteps){
  MovingDancer.call(this, top, left, timeBetweenSteps);
  this.radians = 0;
  this.sizeModifier = 5;
  this.$node = $('<div class="romney dancer"  id =\"dancer' + this.counter + '\"><img src="images/romney.gif" alt="Romney" width=300></div>');
};

Romney.prototype = Object.create(MovingDancer.prototype);
Romney.prototype.constructor = Romney;
// debugger

var makeRomney = function(top, left, timeBetweenSteps){
  var romney = new Romney(top, left, timeBetweenSteps);

  window.dancers.push(romney);
  romney.setPosition(top, left);
  romney.step();

  return romney;
};