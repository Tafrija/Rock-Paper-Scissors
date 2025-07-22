let humanScore = 0;
     computerScore = 0;

      computerChoice = ["Rock", "Paper" , "Scissors"]
  function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return computerChoice[randomIndex]
  }

function getHumanChoice() {
    let choice = prompt("Enter your Choice: 1 for Rock, 2 for Paper, 3 for Scissors");
    let humanChoice = parseInt(choice);

    if (humanChoice === 1) {
        return "Rock";
    } else if (humanChoice === 2) {
        return "Paper";
    } else if (humanChoice === 3) {
        return "Scissors";
    } else {
        return "Invalid";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Invalid") {
        return "Invalid input! Please enter 1, 2, or 3.";
    }

    if (humanChoice === computerChoice) {
        return `It's a Tie! Both chose ${humanChoice}.`;
    }

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}. Your score: ${humanScore}, Computer score: ${computerScore}`;
    } else {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${humanChoice}. Your score: ${humanScore}, Computer score: ${computerScore}`;
    }
}

//Play a single round
let human = getHumanChoice();
let computer = getComputerChoice();
console.log(`You chose: ${human}`);
console.log(`Computer chose: ${computer}`);
console.log(playRound(human, computer));
