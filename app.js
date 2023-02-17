let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const arrOfChoices = ["rock", "paper", "scissors"];
    const randomArr = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomArr];
    return compChoice;
}
console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        return "Player wins";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        return "Player wins";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return "Player wins";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return "Computer wins";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        return "Computer wins";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;    
        return "Computer wins";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type Rock, Paper or Scissors: ", "Rock, Paper, Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection)); 
        console.log(playerScore);
        console.log(computerScore);
    }
}

game();