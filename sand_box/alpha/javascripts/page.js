(function(){
  window.Page = Page;

  var start, bam;

  function Page(){
    // My thought is that this page _object_ can be a manifest for seeing what is all setup.

    // create a button for the 'new button', button
    start = new Button('new-button');
    start.init();

    // create a button for the 'bam button', button
    bam = new Button('bam-button');
    bam.init();
  }

  Page.prototype = {}; // nothing needed at the moment.
})();
