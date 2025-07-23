
// Pseudocode
// 1. Hightlight the possible options with which the player have to choose from.
// 2. Identify key players, for this case are two players.
// 3. Come up strategies on how these players will play.
// 4. Analyze results


// 1. Possible options
// variable initialized
let options = ['rock', 'paper', 'scissors'];

 let humanScore = 0;
    computerScore = 0;
 
// 2. Key Players.
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function getHumanChoice() {
  let humanChoice = false;

  while (!humanChoice) {
    const choice = prompt("Rock, Paper, or Scissors?");

    if (choice == null) continue;

    const choiceInLowerCase = choice.toLowerCase();

    if (options.includes(choiceInLowerCase)) {
      humanChoice = true;
      return choiceInLowerCase;
    }
  }
}

// 3. Playing in action.
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);

  if (result === "Tie") {
    return "It's a Tie!";
  } else if (result === "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

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


// 4. Analysis
function game() {
  

  console.log("Welcome to Rock Paper Scissors!");

  for (let i = 0; i < 5; i++) {
    const playerSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1}:`);
    console.log(playRound(playerSelection, computerSelection));

    const winner = checkWinner(playerSelection, computerSelection);

    if (winner === "Player") {
      humanScore++;
    } else if (winner === "Computer") {
      computerScore++;
    }
  }

  console.log("Game Over!");
  if (humanScore > computerScore) {
    console.log("Player wins the game!");
  } else if ( humanScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

game();





