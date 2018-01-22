//business logic

function Places(place, land, time, note) {
  this.place = place;
  this.land = land;
  this.time = time;
  this.note = note;
}

var allNotes = new Places();
Places.prototype.newPlace = function() {
  return this.place + this.land + this.time + this.note;
}

// user interface logic
$(document).ready(function() {
  $("form#placeInput").submit(function(event) {
      event.preventDefault();

      var inputtedNewPlace = $("input#newPlace").val();
      var inputtedLandmarks = $("input#newLandmarks").val();
      var inputtedTime = $("input#newTime").val();
      var inputtedNotes = $("input#newNotes").val();

var allNotes = new Places(inputtedNewPlace, inputtedLandmarks, inputtedTime, inputtedNotes);

$("ul#places").append("<li><span class='place'>" + allNotes.place + "</span></li>");
// $("#places").show();


$(".place").last().click(function() {
$("#showDetails").show();
$(".landmark").text(allNotes.land);
$(".year").text(allNotes.time);
$(".notes").text(allNotes.note);
});


});
});
