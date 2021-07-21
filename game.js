var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var playerPattern = [];
var i = 0;

$(document).keydown(function (event) {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  $("#" + randomChosenColour)
    .fadeOut(2100)
    .fadeIn(2100);
});

/*
for (i = 0; i < 4; i++) {
  alert(i);
  $(document).on(keydown, function (event) {
    alert(i);
    $("'#' + buttonColours[i]").fadeOut(2100).fadeIn(2100);
    alert("here");
  });
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}
*/
