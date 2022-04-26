let heading = document.getElementById("h1");
let textBox = document.getElementById("txtBox");
let scoreText = document.getElementById("scoreh1");
let guessBtn = document.getElementById("guessBtn");
let startBtn = document.getElementById("startBtn");
let attemptsText = document.getElementById("attempth2");
let audio = new Audio("../music/level1.mp3");
audio.loop = true;
let randCountry = "";
let randCapital = "";
let score = 0;
let countriesLevel = {};
let attempts = 0;

startBtn.onclick = function () {
   audio.play();
   startBtn.style.display = "none";
   guessBtn.style.display = "inline";
   textBox.style.display = "inline";
   scoreText.innerHTML = `Score: ${score}`;
   attemptsText.innerHTML = `Attempts: ${attempts}/15`;
   collectList(1);
   getRandomCountry();
   setHeading();
};

guessBtn.onclick = function () {
   let userAnswerCap = textBox.value.toUpperCase();
   if (userAnswerCap == randCapital) {
      score++;
      attempts++;
      attemptsText.innerHTML = `Attempt: ${attempts}/15`;
      scoreText.innerHTML = `Score: ${score}`;
      getRandomCountry();
      setHeading();
      textBox.value = "";
      guessBtn.innerHTML = "Guess";
   } else if (userAnswerCap != randCapital && attempts == 14) {
      attempts++;
      attemptsText.innerHTML = `Attempt: ${attempts}/15`;
      scoreText.innerHTML = `Score: ${score}`;
      maxAttemptsReached();
   } else if (userAnswerCap != randCapital && attempts < 14) {
      attempts++;
      attemptsText.innerHTML = `Attempt: ${attempts}/15`;
      showCorrectAnswer();
      guessBtn.innerHTML = "Try Again";
      textBox.value = "";
      textBox.style.display = "none";
      getRandomCountry();
      guessBtn.style.display = "none";
      setTimeout(function () {
         setHeading();
      }, 900);
   }
   if (score == 10) {
      userWon();
   } else if (attempts == 15) {
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
   return randCountryWithCapital;
}

function collectList(level) {
   countriesLevel = {};
   let numberOfCountries = countries.length;
   for (i = 0; i < numberOfCountries; i++) {
      if (countries[i].level == level) {
         countriesLevel[countries[i].country] = countries[i].capital;
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
   score = 0;
   attempts = 0;
}

function maxAttemptsReached() {
   heading.innerHTML = "Max Number of Attempts Reached";
   startBtn.innerHTML = "Play Again";
   heading.style.color = "red";
   heading.style.setProperty("filter", "drop-shadow(0 0 20px red)");
   textBox.style.display = "none";
   guessBtn.style.display = "none";
   startBtn.style.display = "inline";
   score = 0;
   attempts = 0;
}
