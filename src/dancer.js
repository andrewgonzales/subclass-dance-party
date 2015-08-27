// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // this.left = left;
  // this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  //TODO fix for last dancer
  $(".dancer").on("click", function(event){
    $(this).addClass("hide");
    //function()
    $(this).removeClass("dancer");
  });
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.freakOut = function(){
  this.top = this.top-100;
};

// Dancer.prototype.lineUp = function(){  
//   var  xCoord = window.width()/2 - window.dancers.length*20/2;
//   for(var i = 0; i < window.dancers.length; i++){
//     xCoord += 20;
//     window.dancers[i].setPosition(window.height()/2, xCoord);
//   }
// };