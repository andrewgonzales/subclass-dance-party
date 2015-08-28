var PoliticianDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.rotatedLeft = true;
  this.rotatedRight = false;
  this.sourceArray = ["images/bush.gif", "images/christie.gif", "images/clinton.gif", "images/cruz.gif", "images/putin.gif", "images/rubio.gif", "images/sanders.gif", "images/trump.gif", "images/walker.gif"];
  this.randIndex = Math.floor(Math.random()*this.sourceArray.length);
  this.$node = $('<div class="politician dancer" id =\"dancer' + this.counter + '\"><img src= \"' + this.sourceArray[this.randIndex] + '\" width=300></div>');
}
PoliticianDancer.prototype = Object.create(Dancer.prototype);
PoliticianDancer.prototype.constructor = PoliticianDancer;

PoliticianDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  if(this.isActive){
    if(this.rotatedLeft){
      
      this.$node.removeClass("rotatedLeft");
      this.$node.addClass("rotatedRight");
      this.rotatedLeft = false;
      this.rotatedRight = true;
      
    } else {
      
      this.$node.removeClass("rotatedRight");
      this.$node.addClass("rotatedLeft");
      this.rotatedLeft = true;
      this.rotatedRight = false;
    } 
  }
  this.logEventListener();

};  


var makePoliticianDancer = function(top, left, timeBetweenSteps){
  var politicianDancer = new PoliticianDancer(top, left, timeBetweenSteps);
  //var politicianDancer = new PoliticianDancer(top, left, timeBetweenSteps);//makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  window.dancers.push(politicianDancer);
  politicianDancer.setPosition(top, left);
  politicianDancer.step();

  return politicianDancer;
};