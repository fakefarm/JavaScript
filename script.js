(function(){
  var settings,
  Goal = {
    settings: {
      newButton: document.getElementById('new-button'),
      entry: document.getElementById('goal-entry'),
      body: document.getElementById('body'),
    },
    init: function() {
      settings = this.settings;
      this.constructor();
    },
    constructor: function() {
      this.showBox();
      this.hideBox();
      this.entries();
    },
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
  Goal.init();
})();
