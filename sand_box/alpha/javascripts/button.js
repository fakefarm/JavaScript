(function (){

  window.Button = Button;

  var _button, _colorPower;

  function Button(myId){
    _button = document.getElementById(myId);
  }

  Button.prototype = {
    init: function() {
      _button.onclick = function() {
        _colorPower = new ColorPower();
      };
    }
  };
})();
