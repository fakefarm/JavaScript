(function(){
  window.ColorPower = ColorPower;

  var counter = 0;

  function ColorPower(){
    counter ++;
    console.log('Number of ColorPowers: ' + counter);
    colorChange();
  }
  ColorPower.prototype = {};

  function colorChange(){
    if ((counter > 2) && (counter < 5)) {
      document.getElementById("body").style.background="blue";
    }
    else if (counter > 5) {
      document.getElementById("body").style.background="red";
    }
    else {
      document.getElementById("body").style.background="green";
    }
  }
})();
