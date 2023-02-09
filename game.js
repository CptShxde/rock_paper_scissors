function game() {
    for (let i = 0; i < 5; i++) {
        const choices = ["rock", "paper", "scissors"];

        function getComputerChoice() {
            return choices[Math.floor(Math.random()* choices.length)]
        }

        let playerSelection = prompt("type: rock, paper or scissors.").toLowerCase();
        let computerSelection = getComputerChoice();

        function playGame(playerSelection, computerSelection) {
            let score = 0

            if (playerSelection == computerSelection) {
                return ("It's a draw! Your score is " + score);
            }
            else if (playerSelection === "rock" && computerSelection === "scissors") {
                let score = score + 1;
                return ("You Win! Rock beats Scissors. Your score is " + score);
            }
            else if (playerSelection === "rock" && computerSelection === "paper") {
                return ("You Lose! Paper beats Rock. Your score is " + score);
            }
            else if (playerSelection === "paper" && computerSelection === "rock") {
                let score = score + 1;
                return ("You Win! Paper beats Rock. Your score is " + score);
            }
            else if (playerSelection === "paper" && computerSelection === "scissors") {
                return ("You Lose! Scissors beats Papers. Your score is " + score);
            }
            else if (playerSelection === "scissors" && computerSelection === "paper") {
                let score = score + 1;
                return ("You Win! Scissors beats Paper. Your score is " + score);
            }
            else if (playerSelection === "scissors" && computerSelection === "rock") {
                return ("You Lose! Rock beats Scissors. Your score is " + score);
            }
            else {
                return ("Something went wrong...");
            }

        }
        let result = playGame(playerSelection, computerSelection);
        console.log(result);
    }
}

    

