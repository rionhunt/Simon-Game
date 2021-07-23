const greenBtn = $("#green");
const redBtn = $("#red");
const yellowBtn = $("#yellow");
const blueBtn = $("#blue");
var gamePattern = [];
var randomChosenColor;
var randomNumber;

const btnColors = ["green", "red", "yellow", "blue"];

$(document).keydown(function (event) {
  nextColor();
  function nextColor() {
    // Get the random color and push to the array
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = btnColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //console.log(GamePattern[0]);
    liteBtns();
  }

  function liteBtns() {
    setTimeout(() => {
      if (randomChosenColor == "green") {
        $(greenBtn).fadeOut(500).fadeIn(500);
      }
    }, 1000);

    setTimeout(() => {
      if (randomChosenColor == "red") {
        $(redBtn).fadeOut(500).fadeIn(500);
      }
    }, 1000);

    setTimeout(() => {
      if (randomChosenColor == "yellow") {
        $(yellowBtn).fadeOut(500).fadeIn(500);
      }
    }, 1000);

    setTimeout(() => {
      if (randomChosenColor == "blue") {
        $(blueBtn).fadeOut(500).fadeIn(500);
      }
    }, 1000);
    $(greenBtn).stop();
    $(redBtn).stop();
    $(yellowBtn).stop();
    $(blueBtn).stop();
  }
});
