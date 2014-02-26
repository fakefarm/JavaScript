  var settings, myAction, myGoals;
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
  window.Goal = Goal;

  var myActionly = new myAction;
  myGoals.init(myActionly);

