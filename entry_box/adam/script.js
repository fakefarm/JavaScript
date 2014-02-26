(function(){
  var settings, myAction, myGoals;
  myGoals = (function(){
    var Goal = {
      settings: {
        newButton: document.getElementById('new-button'),
        entry: document.getElementById('goal-entry'),
        body: document.getElementById('body'),
      },
      init: function(theAction) {
        settings = this.settings;
        this.collector(theAction);
      },
      collector: function(act) {
        act.showBox();
        act.hideBox();
        act.entries();
      },
    };

    return Goal;
  }());

  myAction = (function(){
    function foo(){

    }
    var settings = {}
    Action = {
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

  var myActionly = new myAction;
  myGoals.init(myActionly);
})();
