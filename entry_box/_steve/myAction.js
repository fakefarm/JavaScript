(function(){
  // describe button
  // it should fire a click event when element is clicked
  // the value increases for each instantiated object

  //myButtonTest = new Button($elem);
  // ... jasmine

  function Input($el){
    this.$el = $el;
    this.$el.on("click",this.onClick);
    // things that go into constructor
    // variable assignments
    // event handlers
    // anything that the 'team' needs to play with in this settings
    // any kind of relvant and specific setup.
  }
  Input.prototype = {
    hide: function(){
      this.$el.hide()
    },
    show: function(){
      this.$el.show();
    },
    onClick: function(e){
      e.stopPropagation();
      e.preventDefault();
    }
    // notes w/ steve
    // things that go into protoype
    // if we're talking about 'this.button', then it should be in prototype.
    //
  }

  // $('body').click(function(e){
  //   console.log(this); // body
  // })
  // callback.call(scope,arg,arg,arg) callback.apply(e.currentTarget,arguments)
  function Action(button,input){
    var self = this;
    this.button = button;
    this.input = input;
    this.closeFromBody = function(e){
      self.hideInput();
    }
    this.bindEvents();
  }
  Action.prototype = {
    bindEvents: function(){
      $(this.button).on("click",function(){
        self.onButtonClick()
      })
    },
    hideInput: function(){
      this.input.hide();
      $('body').off("click",this.closeFromBody);
    },
    onButtonClick: function(){
      var self = this;
      this.input.show();
      $('body').on("click",this.closeFromBody);
    }
  }

  function Action($){
    this.$el = $el;
  }

  Action.prototype = {
    showBox: function(){
      this.$el.on("click",function(e){
        $(this)
      })
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
  }
})();

// erb

var $new = $('.new')
var newAct = new myAction($new);
var oldAct = new myAction(old);


var myAction
// this things hits


// Homework
// intro to underscore - research bind function
// move things into separate files, including .init.js
// try to test with jasmine


