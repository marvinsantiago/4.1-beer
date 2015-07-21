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

  contentEl.innerHTML = inventory;
})();
