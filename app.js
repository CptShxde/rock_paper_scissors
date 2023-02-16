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
        return "Player wins";
        ++playerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player wins";
        ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player wins";
        ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins";
        ++computerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer wins";
        ++computerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins";
        ++computerScore;    
    }
}

function roundScore(playerScore, computerScore) {
    if (playRound === "Player wins") {
        playerScore++;
    }
    else if (playRound === "Computer wins") {
        computerScore++;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type Rock, Paper or Scissors: ", "Rock, Paper, Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection)); 
        roundScore(); 
        console.log(playerScore);
        console.log(computerScore);
    }
}

game();