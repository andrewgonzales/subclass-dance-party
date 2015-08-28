var Trogdor = function(top, left, timeBetweenSteps){
  CircleDancer.call(this, top, left, timeBetweenSteps);
  this.radians = 0;
  this.sizeModifier = 5;
  this.$node = $('<div class="trogdor dancer" id =\"dancer' + this.counter + '\"><img src="images/trogdor.png" alt="Trogdor" width=300></div>');
  this.enemyAround = false;
};

Trogdor.prototype = Object.create(CircleDancer.prototype);
Trogdor.prototype.constructor = Trogdor;


var makeTrogdor = function(top, left, timeBetweenSteps){
  var trogdor = new Trogdor(top, left, timeBetweenSteps);

  window.dancers.push(trogdor);
  trogdor.setPosition(top, left);
  trogdor.step();

  return trogdor;
};

Trogdor.prototype.step = function(){
  this.oldStep();
  
  _.each(window.dancers, function(dancer){
    if (dancer instanceof CircleDancer){
      this.enemyAround = true;
    }
  });

    if (this.enemyAround){
      this.measureDistance();
    } else {

    if(this.isActive){
      this.top += Math.sin(this.radians)*10*this.sizeModifier;
      this.left += Math.cos(this.radians)*10*this.sizeModifier;
      this.radians += Math.PI/8;

      this.setPosition(this.top, this.left);
      this.measureDistance();
    }
  }
};

