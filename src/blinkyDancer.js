var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<div class="blinky dancer" id =\"dancer' + this.counter + '\"><img src="images/money.gif~c200" alt="$$$" width=50></div>');
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
 
};

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = new BlinkyDancer(top, left, timeBetweenSteps);//makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  if(!window.dancers){
    window.dancers = [];
  }
  window.dancers.push(blinkyDancer);
  blinkyDancer.setPosition(top, left);
  blinkyDancer.step();

  return blinkyDancer;
};