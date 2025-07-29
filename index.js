let options = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let gameOver = false; // flag to stop the game

// DOM elements
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const scoreDiv = document.querySelector(".score");

// Get Computer Choice
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// Determine the winner
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

// Play a single round
function playRound(playerSelection, computerSelection) {
  if (gameOver) return; // prevent further rounds

  outcomeDiv.innerHTML = ""; // clear previous result
  const result = checkWinner(playerSelection, computerSelection);
  const p = document.createElement('p');

  if (result === "Tie") {
    p.innerText = `It's a Tie! You both chose ${playerSelection}.`;
  } else if (result === "Player") {
    humanScore++;
    p.innerText = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    p.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  outcomeDiv.appendChild(p);
  updateScore();
  checkForWinner(); // check for 5 wins
}

// Update score display
function updateScore() {
  scoreDiv.innerText = `Player: ${humanScore} | Computer: ${computerScore}`;
}

// Check for final winner and stop the game
function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;

    const h2 = document.createElement('h2');
    h2.classList.add(humanScore === 5 ? 'player-won' : 'computer-won');

    if (humanScore === 5) {
      h2.innerText = `🎉 You won the game! Final score: ${humanScore} to ${computerScore}`;
    } else {
      h2.innerText = `😞 Computer wins the game! Final score: ${computerScore} to ${humanScore}`;
    }

    outcomeDiv.appendChild(h2);

    // Optionally disable buttons
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

// Event Listeners
rockBtn.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});
