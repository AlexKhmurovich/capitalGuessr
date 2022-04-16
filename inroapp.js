let userScore = document.getElementById("pointsEarned");

userScore.innerHTML = `Score: ${localStorage.getItem("userScore")}`