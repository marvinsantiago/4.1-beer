(function() {

  function templateByQuery(query) {
    var templateString = document.querySelector(query).innerHTML;
    return Handlebars.compile(templateString);
  }

  var contentEl = document.querySelector('.listings');
  var template = templateByQuery('#beer-template');

  var inventory = '';

  beerData.data.forEach(function(data) {
    inventory += template(data);
  });

  contentEl.innerHTML = inventory ;

  var list = document.querySelector('#button-list');

  list.onclick = function() {
    contentEl.classList.add('list');
    contentEl.classList.remove('grid');
  };

  var grid = document.querySelector('#button-grid');

  grid.onclick = function() {
    contentEl.classList.add('grid');
    contentEl.classList.remove('list');
  }; list.onclick();

})();
