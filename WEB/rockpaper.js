let playerScore = 0;
let computerScore = 0;
let choices = ['rock', 'paper', 'scissors'];
let images = {
  rock: "rock.png",
  paper: "paper.png",
  scissors: "scissors.png"
};

function playGame(playerChoice) {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let message = "";

  document.getElementById("computer-choice").src = `${images[computerChoice]}`;

  if (playerChoice === computerChoice) {
    message = "Tie!";
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'scissors') {
      message = "You Win!";
      playerScore++;
    } else {
      message = "You Lose!";
      computerScore++;
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      message = "You Win!";
      playerScore++;
    } else {
      message = "You Lose!";
      computerScore++;
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'paper') {
      message = "You Win!";
      playerScore++;
    } else {
      message = "You Lose!";
      computerScore++;
    }
  }

  document.getElementById("message").innerHTML = message;
  document.getElementById("player-score").innerHTML = `Player: ${playerScore}`;
  document.getElementById("computer-score").innerHTML = `Computer: ${computerScore}`;

  document.getElementById("play-again").style.display = "block";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("message").innerHTML = "";
  document.getElementById("computer-choice").src = "";
  document.getElementById("play-again").style.display = "none";
  document.getElementById("player-score").innerHTML = `Player: ${playerScore}`;
  document.getElementById("computer-score").innerHTML = `Computer: ${computerScore}`;
}
