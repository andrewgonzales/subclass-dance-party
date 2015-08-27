// Creates and returns a new dancer object that can step
var counter = 0;

var Dancer = function(top, left, timeBetweenSteps){
  this.counter = counter;
  counter++;
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.oldStep = Dancer.prototype.step;
  this.isActive = true;
  this.distances = [];
  this.$node = $('<span class="dancer" id =\"dancer' + this.counter + '\"></span>');
  //TODO fix for last dancer
  var context = this;
  var selector = "dancer" + this.counter;
//"#" + selector
  $(".dancer").on("click" , function(event){

    $(this).addClass("hide");
    dancers[context.counter-1].isActive = false;
    $(this).removeClass("dancer");
  });
  // $(".dancer").on("mouseleave", function(event){
  //   $(this).addClass("dancer");
  //   //function()
  //   $(this).removeClass("hide");
  //   // this.isActive = true;
  // });
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

Dancer.prototype.measureDistance = function(){
  this.distances = [];
    for(var i = 0; i < window.dancers.length; i++){
      this.distances.push(Math.pow(Math.pow(window.dancers[i].left-this.left, 2) + Math.pow(window.dancers[i].top-this.top, 2), 0.5));
      if(this.distances[i]<50 && this.distances[i] !== 0){
        this.freakOut();
      }
    }
};