(function(){

  // global vars
  $now = $('#now');
  $later = $('#later');
  $done = $('#done');
  var user = (localStorage.getItem('user'));
  var itemObject = JSON.parse(user);


  // begin- add items from local storage
  function paint(){
    var now = _.where(itemObject.lists, {status: 'now'});
    _.each(now, function(item){
      var myLink = addLinks(item);
      $now.append(myLink);
    });

    var later = _.where(itemObject.lists, {status: 'later'});
    _.each(later, function(item){
      var myLink = addLinks(item);
      $later.append(myLink);
    });

    var done = _.where(itemObject.lists, {status: 'done'});
    _.each(done, function(item){
      var myLink = addLinks(item);
      $done.append(myLink);
    });
  }

  if (itemObject !== null) {
    paint();
  }
  // end- add items from local storage


  // helper methods
  function addLinks(activity) {
    return '<li data-item=task data-id=' +
    activity.id +
    '>' +
    activity.text +
    ' <a data-btn="complete" class="task-style" href="">done</a>' +
    ' <a data-btn="later" class="task-style" href="">later</a>' +
    '</li>';
  }

  $('a').click(function(e){
    e.preventDefault();
  });

  // submit behavior

    $( '#target' ).submit(function(e){
      e.preventDefault();
      $text = $('#copy').val();
      var activity = new Activity($text);
      $now.append(
        '<li data-item=task>' +
        activity.text +
        ' <a data-btn="complete" class="task-style" href="">done</a>' +
        ' <a data-btn="later" class="task-style" href="">later</a>' +
        '</li>'
      );


      // begin- Local storage
      var user = (localStorage.getItem('user'));
      user = JSON.parse(user);

      if (_.size(user) < 1) {
        user = {
            lists: []
        };
        console.log('new user initialized!');
      } else {
        console.log('user exists - did not create.');
      }

      var item = user.lists.push({
        id: activity.id,
        text: activity.text,
        status: activity.status,
        index: activity.index
      });

      localStorage.setItem('user', JSON.stringify(user));

      // end- Local storage

      $('#copy').val('');
    });
  // end

  // sortable behaviors
  $now.sortable({
    connectWith: ['#later', '#done'],
    placeholder: 'placeholder',
    dropOnEmpty: 'true',
    axis: 'y',
    receive: function() {
      $now.find('[data-btn="later"]').fadeIn('fast');
    }
  });

  $later.sortable({
    connectWith: ['#now', '#done'],
    placeholder: 'placeholder',
    dropOnEmpty: 'true',
    axis: 'y',

    update: function() {
      if ($later.children().size() === 0) {
        $later.addClass('empty');
      } else {
        $later.removeClass('empty');
      }
    },
    receive: function(){
      $later.find('[data-btn="later"]').fadeOut('fast');
    }
  });

  $done.sortable({
    connectWith: ['#later', '#now'],
    placeholder: 'placeholder',
    dropOnEmpty: 'true',
    axis: 'y',
    receive: function() {
      $later.find('[data-btn="done"]').fadeOut('fast');
    }
  });

  // end sortable

  // Item behaviors
    $('[data-btn=later]').click(function(){
      var $id = $(this).parent().data('id');
      var task = _.where(itemObject.lists, {id: $id});

      itemObject.lists.push(task[0].status = 'later');

      localStorage.setItem('user', JSON.stringify(itemObject));

      var $self = $(this);
      var $task = $self.parent().get(0).firstChild.nodeValue;
      $self.parent().remove();
      var myli = $(
        '<li>' +
        $task +
        ' <a data-btn="complete" class="task-style" href="">done</a>' +
        '</li>'
      );
      $later.append(myli);
    });

    $('[data-btn=complete]').click(function(){
      var $id = $(this).parent().data('id');
      var task = _.where(itemObject.lists, {id: $id});

      itemObject.lists.push(task[0].status = 'done');

      localStorage.setItem('user', JSON.stringify(itemObject));

      var $self = $(this);
      var $task = $self.parent().get(0).firstChild.nodeValue;
      $self.parent().remove();
      var myli = $(
      '<li>' +
      $task +
      '</li>'
      );
      $done.append(myli);
    });
  // end

  // initialize
  $('#later a[data-btn=later]').addClass('hide-link');
  $later.addClass('empty');

  $('#clear-list').click(function(){
    localStorage.clear();
    $('li').remove();
  });
})();


