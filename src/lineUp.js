var lineUp = function(){  
  var  xCoord = $("body").width()/2 - window.dancers.length*20/2;
  for(var i = 0; i < window.dancers.length; i++){
    xCoord += 20;
    window.dancers[i].isActive = false;
    window.dancers[i].setPosition($("body").height()/2, xCoord);
  }
};