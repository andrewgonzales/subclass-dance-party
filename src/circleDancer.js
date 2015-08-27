var CircleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this);
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.oldStep = Dancer.prototype.step;
  this.radians = 0;
  this.isActive = true;
  this.distances = [];

}
CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function(){
  this.oldStep();
  
  if(this.isActive){
    this.top += Math.sin(this.radians)*10;
    this.left += Math.cos(this.radians)*10;
    this.radians += Math.PI/8;

    this.setPosition(this.top, this.left);
    
    this.distances = [];
    for(var i = 0; i < window.dancers.length; i++){
      this.distances.push(Math.pow(Math.pow(window.dancers[i].left-this.left, 2) + Math.pow(window.dancers[i].top-this.top, 2), 0.5));
      if(this.distances[i]<50 && this.distances[i] !== 0){
        this.freakOut();
      }
    }
  }
};



var makeCircleDancer = function(top, left, timeBetweenSteps){
  var circleDancer = new CircleDancer(top, left, timeBetweenSteps);

  window.dancers.push(circleDancer);
  circleDancer.setPosition(top, left);
  circleDancer.step();

  return circleDancer;
};