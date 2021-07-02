
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Applying click event listener to all buttons using loop.
// Detecting button press

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// The listener [JS Function]
function handleClick() {
  var buttonInnerHtml = this.innerHTML;

  makeSound(buttonInnerHtml);

  buttonAnimation(buttonInnerHtml);
}

// Detecting KeyBoard Press
document.addEventListener("keydown", soundOnKeypress);

function soundOnKeypress(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}

// Sound as per pressed Key
function makeSound(key) {

    switch (key) {
      case "w":
        var tom1 = new Audio("tom-1.mp3");
        tom1.play();
      break;

      case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

      case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

      case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

      case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

      default: console.log(buttonInnerHtml);
    }
}

// Button Click/Press Animations
function buttonAnimation(currentKey) {
   //concatenating passed key.
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
      // removes class characteristics after 100ms
    }, 100);
}
