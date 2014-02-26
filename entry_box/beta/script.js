(function(){
  var atoms, beta, myActions, mySelectors;

  mySelectors = $('#div.selectors');
  myActions = $('#div.actions');

  atoms = [mySelectors, myActions];

  beta = new Project(atoms); // job being to pull it all together

  new Platform(beta); // Do something with it all
  new Dashboard(beta); // Do something with it all

}());
