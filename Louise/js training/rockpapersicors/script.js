document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.querySelector(".playerDisplay");
    const computerDisplay = document.querySelector(".computerDisplay");
    const resultDisplay = document.querySelector(".resultDisplay");
    const playerScoreDisplay = document.querySelector(".playerScore");
    const computerScoreDisplay = document.querySelector(".computerScore");

    let playerScore = 0;
    let computerScore = 0;

    // Player gets choice
    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if(playerChoice === computerChoice) {
            result = "It is a tie";
        } else {
            switch(playerChoice) {
                case "rock":
                    result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                    break;
            }

            // Updating scores
            if (result === "You Win!") {
                playerScore++;
            } else if (result === "You Lose!") {
                computerScore++;
            }
        }

        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
        resultDisplay.textContent = result;

        // Update and display scores
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    // Example: Add event listeners to buttons
    document.querySelector(".rock").addEventListener("click", function() {
        playGame("rock");
    });

    document.querySelector(".paper").addEventListener("click", function() {
        playGame("paper");
    });

    document.querySelector(".scissors").addEventListener("click", function() {
        playGame("scissors");
    });
});