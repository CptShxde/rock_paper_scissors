/* 
REBUILDING FROM SCRATCH (app.js)


function game() {
    for (let i = 0; i < 5; i++) {
        const choices = ["rock", "paper", "scissors"];

        function getComputerChoice() {
            return choices[Math.floor(Math.random()* choices.length)]
        }

        let playerSelection = prompt("type: rock, paper or scissors.").toLowerCase();
        let computerSelection = getComputerChoice();
        let playerScore = 0;

        function playGame(playerSelection, computerSelection) {

            if (playerSelection == computerSelection) {
                return ("It's a draw!");
            }
            else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                return ("You Win! Rock beats Scissors.");
            }
            else if (playerSelection === "rock" && computerSelection === "paper") {
                return ("You Lose! Paper beats Rock.");
            }
            else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                return ("You Win! Paper beats Rock.");
            }
            else if (playerSelection === "paper" && computerSelection === "scissors") {
                return ("You Lose! Scissors beats Papers.");
            }
            else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                return ("You Win! Scissors beats Paper.");
            }
            else if (playerSelection === "scissors" && computerSelection === "rock") {
                return ("You Lose! Rock beats Scissors.");
            }
            else {
                return ("Something went wrong...");
            }
        }
        

        let result = playGame(playerSelection, computerSelection);
        console.log(result);
        console.log(playerScore);
        
    }
}

    

 */