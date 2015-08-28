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
  this.logEventListener();
};



Dancer.prototype.burninate = function(enemyY, enemyX){
  this.setPosition((enemyY+this.top)/4, (enemyX+this.left)/4);
};


Dancer.prototype.measureDistance = function(){
    for(var i = 0; i < window.dancers.length; i++){
      if (window.dancers[i] instanceof CircleDancer){
        var enemyX = dancers[i].left;
        var enemyY = dancers[i].top;
        var distance =Math.pow(Math.pow(window.dancers[i].left-this.left, 2) + Math.pow(window.dancers[i].top-this.top, 2), 0.5);
        this.burninate(enemyY, enemyX);
        debugger;
        if(distance < 50 && distance > 0){
          debugger;
          this.enemyAround = false;
          $("#dancer" + dancers[i].counter).remove();
        }
      }
    }
};

Dancer.prototype.logEventListener = function(){
  var context = this;
  var selector = "dancer"+ this.counter;
  $("#" + selector).on("mouseenter" , function(event){
    $(this).addClass("hide");
    dancers[context.counter].isActive = false;
    $(this).removeClass("dancer");
  });
  $("#" + selector).on("mouseleave", function(event){
    $(this).addClass("dancer");
    $(this).removeClass("hide");
    context.isActive = true;
  });
};