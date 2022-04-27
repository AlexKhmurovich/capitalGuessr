let heading = document.getElementById("h1");
let textBox = document.getElementById("txtBox");
let scoreText = document.getElementById("scoreh1");
let guessBtn = document.getElementById("guessBtn");
let startBtn = document.getElementById("startBtn");
let attemptsText = document.getElementById("attempth2");
let wheel = document.getElementById("wheel");
let randCountry = "";
let randCapital = "";
let score = 0;
let countriesLevel = {};
let attempts = 0;
var rot = 360;
let audio = new Audio("../music/level4.mp3");
audio.loop = true;

function triggerWheel() {
   wheel.style = "transform: rotate(" + rot + "deg)";
   rot += 360;
}

startBtn.onclick = function () {
   audio.play();
   triggerWheel();
   startBtn.style.display = "none";
   guessBtn.style.display = "inline";
   textBox.style.display = "inline";
   scoreText.innerHTML = `Score: ${score}`;
   attemptsText.innerHTML = `Attempts: ${attempts}/7`;
   collectList();
   getRandomCountry();
   setHeading();
};

guessBtn.onclick = function () {
   triggerWheel();
   let userAnswerCap = textBox.value.toUpperCase();
   if (userAnswerCap == randCapital) {
      score++;
      attempts++;
      attemptsText.innerHTML = `Attempt: ${attempts}/7`;
      scoreText.innerHTML = `Score: ${score}`;
      getRandomCountry();
      setHeading();
      textBox.value = "";
      guessBtn.innerHTML = "Guess";
   } else if (userAnswerCap != randCapital && attempts == 6) {
      attempts++;
      attemptsText.innerHTML = `Attempt: ${attempts}/7`;
      scoreText.innerHTML = `Score: ${score}`;
      maxAttemptsReached();
   } else if (userAnswerCap != randCapital && attempts < 6) {
      attempts++;
      score--;
      attemptsText.innerHTML = `Attempt: ${attempts}/7`;
      scoreText.innerHTML = `Score: ${score}`
      // showCorrectAnswer();
      guessBtn.innerHTML = "Try Again";
      textBox.value = "";
      // textBox.style.display = "none";
      getRandomCountry();
      setHeading()
      // guessBtn.style.display = "none";
      // setTimeout(function () {
      //    setHeading();
      // }, 900);
   }
   if (score == 5) {
      userWon();
   }
   if (score == 5) {
      userWon();
   } else if (score == -5){
    userLost()
   }else if (attempts == 7) {
      clearTimeout();
      maxAttemptsReached();
   }
};

function getRandomCountry() {
   let keys = Object.keys(countriesLevel);
   randCountry = keys[Math.floor(Math.random() * keys.length)];
   randCapital = countriesLevel[randCountry];
   let randCountryWithCapital = {};
   randCountryWithCapital[randCountry] = randCapital;
   console.log(randCountryWithCapital);
   return randCountryWithCapital;
}

function collectList(level = null) {
   countriesLevel = {};
   let numberOfCountries = countries.length;
   for (i = 0; i < numberOfCountries; i++) {
      if (level == null) {
         countriesLevel[countries[i].country] = countries[i].capital;
      } else {
         if (countries[i].level == level) {
            countriesLevel[countries[i].country] = countries[i].capital;
         }
      }
   }
}

function showCorrectAnswer() {
   heading.innerHTML = `Correct Answer: ${randCapital}`;
   heading.style.color = "red";
   heading.style.setProperty("filter", "drop-shadow(0 0 20px red)");
}

function setHeading() {
   heading.innerHTML =
      "NAME THE CAPITAL OF " +
      `<span id="randCountryText">${randCountry}<span>`;
   heading.style.color = "white";
   heading.style.setProperty("filter", "drop-shadow(0 0 20px blue)");
   textBox.style.display = "inline";
   guessBtn.style.display = "inline";
}

function userWon() {
   heading.innerHTML = "You Won";
   textBox.style.display = "none";
   guessBtn.style.display = "none";
   startBtn.style.display = "inline";
   startBtn.innerHTML = "Play Again";
   score = 1;
   attempts = 0;
}

function userLost(){
  heading.innerHTML = "You Lost";
  textBox.style.display = "none";
  guessBtn.style.display = "none";
  startBtn.style.display = "inline";
  startBtn.innerHTML = "Play Again";
  score = 0;
  attempts = 0;
}

function maxAttemptsReached() {
   heading.innerHTML = "Max Number of Attempts Reached";
   startBtn.innerHTML = "Play Again";
   heading.style.color = "pink";
   heading.style.setProperty("filter", "drop-shadow(0 0 20px red)");
   textBox.style.display = "none";
   guessBtn.style.display = "none";
   startBtn.style.display = "inline";
   score = 0;
   attempts = 0;
}
