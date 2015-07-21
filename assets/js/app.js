var contentEl = document.querySelector('.listings');

function templateByQuery(query) {
  var templateString = document.querySelector(query).innerHTML;

  return Handlebars.compile(templateString);
}

var template = templateByQuery('#beer-template');

beerData.data.forEach(function(data) {
  // document.querySelector('.listings').innerHTML += data;
  console.log(data);
});

