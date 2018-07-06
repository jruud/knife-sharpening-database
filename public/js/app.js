//Add placeholder list of knife entries

function getEntries () {
  const alphabet = ["a", "b", "c", "d"];

  alphabet.forEach(function(letter) {
      $('#knife-entries').append("<li>" + letter.toUpperCase() + "</li>");
  });
};
