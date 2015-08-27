var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this);
  this.timeBetweenSteps = timeBetweenSteps;
  this.oldStep = Dancer.prototype.step;
  this.isActive = true;
  this.distances = [];
}
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if(this.isActive){
    this.$node.toggle();
  } else{
    this.$node.show();
  }
 
  this.distances = [];
  for(var i = 0; i < window.dancers.length; i++){
    this.distances.push(Math.pow(Math.pow(window.dancers[i].left-this.left, 2) + Math.pow(window.dancers[i].top-this.top, 2), 0.5));
    if(this.distances[i]<50 && this.distances[i] !== 0){
      this.freakOut();
    }
  }
  //if nearest neighbor < x pixels away
  //do something
};

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = new BlinkyDancer(top, left, timeBetweenSteps);//makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  window.dancers.push(blinkyDancer);
  blinkyDancer.setPosition(top, left);
  blinkyDancer.step();

  return blinkyDancer;
};