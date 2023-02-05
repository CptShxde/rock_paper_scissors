function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let value = Math.floor(Math.random() * 3) + 1;
    
    if (value === 1) {
        getComputerChoice = rock;
    }
    else if (value === 2) {
        getComputerChoice = paper;
    }
    else {
        getComputerChoice = scissors;
    }
    console.log(getComputerChoice);
}

function playerSelection() {
    playerSelection = prompt;
    if (playerSelection === "Rock" || "rock" || "Paper" || "paper" || "Scissors" || "scissors") {
        return playerSelection;
    }
    else {
        alert("Invalid.")
    }
}