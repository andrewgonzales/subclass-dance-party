var CircleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this);
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.oldStep = Dancer.prototype.step;
  this.radians = 0;
}
CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function(){
  this.oldStep();
  
  this.top += Math.sin(this.radians)*10;
  this.left += Math.cos(this.radians)*10;
  this.radians += Math.PI/8;

  this.setPosition(this.top, this.left);
};


var makeCircleDancer = function(top, left, timeBetweenSteps){
  var circleDancer = new CircleDancer(top, left, timeBetweenSteps);

  circleDancer.setPosition(top, left);
  circleDancer.step();

  return circleDancer;
};