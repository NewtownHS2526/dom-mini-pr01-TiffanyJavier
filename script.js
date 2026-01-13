console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
// (1)
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("pink-horse");
//(2)
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");
const winnerText = document.querySelector("#winner");


// OnClick Functions Here
const advanceBlue = (e) => {
  console.log("clicked");
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
  blueHorse.alt = `blue horse at position ${blue_position} out of 5`;
};

const advancePink = (e) => {
   console.log("clicked");
   pink_position += 1;
   changePosition(pinkHorse, pink_position);
   checkWinner(pink_position, "Pink");
   pinkHorse.alt = `pink horse at position ${pink_position} out of 5`;
};

const advanceBrown = (e) => {
  console.log("clicked");
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown");
  brownHorse.alt = `brown horse at position ${brown_position} out of 5`;
}

// Check for a winner
// if position = 5, innerHTML "color is the winner!"
const checkWinner = (position, color) => {
  if (position === 5) {
    winnerText.innerHMTL = color + "is the winner!";
  }
};



// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("Click", advancePink);
brownButton.addEventListener("Click", advanceBrown);