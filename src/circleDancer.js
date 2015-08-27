var CircleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.radians = 0;
  this.sizeModifier = 1;
}
CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function(){
  this.oldStep();
  
  if(this.isActive){
    this.top += Math.sin(this.radians)*10*this.sizeModifier;
    this.left += Math.cos(this.radians)*10*this.sizeModifier;
    this.radians += Math.PI/8;

    this.setPosition(this.top, this.left);
    this.measureDistance();
  }
};



var makeCircleDancer = function(top, left, timeBetweenSteps){
  var circleDancer = new CircleDancer(top, left, timeBetweenSteps);

  window.dancers.push(circleDancer);
  circleDancer.setPosition(top, left);
  circleDancer.step();

  return circleDancer;
};