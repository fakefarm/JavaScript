(function(){
  window.Button = Button;
  var value=0;
  function Button($el){
    this.$el = $el;
    value += 1;
  }
  Button.prototype = {
    onClick: function(e){
      e.preventDefault();
      $(this).trigger("click");
    }
  };
})();

