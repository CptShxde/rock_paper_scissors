const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()* choices.length)]
}

let playerSelection = prompt("type: rock, paper or scissors.");
let computerSelection = getComputerChoice();

function playGame(playerSelection, computerSelection) {
    if (playerSelection === cpuSelection) {
        alert("It's a draw!")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You Win! Rock beats Scissors.");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You Lose! Paper beats Rock.");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You Win! Paper beats Rock.");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You Lose! Scissors beats Papers.");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You Win! Scissors beats Paper.");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You Lose! Rock beats Scissors.");
    }
    else {
        alert("Something went wrong...");
    }
}