let userScore = document.getElementById("pointsEarned");
localStorage.setItem("userScore", 0)


userScore.innerHTML = `Score: ${localStorage.getItem("userScore")}`