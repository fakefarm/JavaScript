myAction = (function(){
  var Action = {
    showBox: function(){
      settings.newButton.onclick = function(event) {
        settings.entry.style.display="block";
        event.stopPropagation();
      };
    },
    hideBox: function() {
      settings.body.onclick = function() {
        settings.entry.style.display='none';
      };
    },
    entries: function() {
      settings.entry.onclick = function(event) {
        event.stopPropagation();
      };
    }
  };
  return Action;
});
