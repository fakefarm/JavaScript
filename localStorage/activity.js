(function(){

  var id, ls;

  ls = localStorage.getItem('user');
  userList = JSON.parse(ls);

  function setIdstartNumber(userList) {
    if (userList !== null) {
      id = _.size(userList.lists);
      id += 1;
    } else {
      id = 0;
    }
  }

  window.Activity = Activity;

  function Activity (text) {
    this.id = setIdstartNumber(userList);
    this.index = 1;
    this.text = text;
    this.status = 'now';
    console.log(this);
  }

  Activity.prototype = {
  };
})();



