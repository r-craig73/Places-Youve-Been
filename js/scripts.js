//business logic

// Each destination should be an object with multiple properties, like location, landmarks, time of year


// Display properties when a user clicks on the place's name.

function Places(place) {
  this.place = place;
}
Places.prototype.newPlace = function() {
  return this.place + " ";
}


// user interface logic
$(document).ready(function() {
  $("form#placeInput").submit(function(event) {
      event.preventDefault();

var inputtedNewPlace = $("input#newPlace").val();

$("ul#places").append("<li><span class='place'>" + inputtedNewPlace + "</span></li>")
$("#places").show();
});
});
