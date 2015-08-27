var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this);
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.oldStep = Dancer.prototype.step;
  this.isActive = true;
  this.distances = [];
  // this.whenAdded = window.dancers.length-1;
}
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  if(this.isActive){
    if(this.left < $("body").width()-20){
      this.left += 20;
      this.setPosition(this.top,this.left)
    }

    if(this.left > $("body").width()-20){
      this.left -= 50;
      this.setPosition(this.top,this.left)
    }
  }

  this.distances = [];
  for(var i = 0; i < window.dancers.length; i++){
    this.distances.push(Math.pow(Math.pow(window.dancers[i].left-this.left, 2) + Math.pow(window.dancers[i].top-this.top, 2), 0.5));
    if(this.distances[i]<50 && this.distances[i] !== 0){
      this.freakOut();
    }
  }
  

};  


var makeMovingDancer = function(top, left, timeBetweenSteps){
  var movingDancer = new MovingDancer(top, left, timeBetweenSteps);//makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  window.dancers.push(movingDancer);
  movingDancer.setPosition(top, left);
  movingDancer.step();

  return movingDancer;
};