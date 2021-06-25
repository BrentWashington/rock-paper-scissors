let playerScore = 0;
let computerScore = 0;
let roundResult = document.querySelector("#round-result");

// Reset player's selection
let playerSelection = "";

// Player chose rock
document.querySelector("#rock").addEventListener("click", () => {
    playerSelection = "rock";
    playRound(playerSelection, computerPlay());
});

// Player chose paper
document.querySelector("#paper").addEventListener("click", () => {
    playerSelection = "paper";
    playRound(playerSelection, computerPlay());
});

// Player chose scissors
document.querySelector("#scissors").addEventListener("click", () => {
    playerSelection = "scissors";
    playRound(playerSelection, computerPlay());
});

// Returns a random selection to play against the player
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Plays a single round of the game
function playRound(playerSelection, computerSelection) {
    let playerWins = false;
    let computerWins = false;

    // Check if the target score has been reached
    if (playerScore === 5) {
        roundResult.textContent = "Player wins the game!";
        document.getElementById("play-buttons").style.display = "none";
    } else if (computerScore === 5) {
        roundResult.textContent = "Computer wins the game!";
        document.getElementById("play-buttons").style.display = "none";
    } else { // Continue the game if the target score has not been reached
        // The player wins
        if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "rock") {
            roundResult.textContent = `You win! ${formatSelection(playerSelection)} beats ${formatSelection(computerSelection)}!`;

            playerWins = true;
            updateScore(playerWins, computerWins);
        }

        // The computer wins
        if (computerSelection === "rock" && playerSelection === "scissors" ||
            computerSelection === "scissors" && playerSelection === "paper" ||
            computerSelection === "paper" && playerSelection === "rock") {
            roundResult.textContent = `You lose! ${formatSelection(computerSelection)} beats ${formatSelection(playerSelection)}!`;

            computerWins = true;
            updateScore(playerWins, computerWins);
        }

        // It's a draw
        if (playerSelection === computerSelection) {
            roundResult.textContent = `It's a draw! You both chose ${formatSelection(playerSelection)}!`;

            updateScore(playerWins, computerWins);
        }
    }
}

// Updates the score
function updateScore(playerWins, computerWins) {
    if (playerWins === true && computerWins === false) {
        playerScore += 1;
        document.querySelector("#player-score-number").textContent = playerScore;
    } else if (computerWins === true && playerWins === false) {
        computerScore += 1;
        document.querySelector("#computer-score-number").textContent = computerScore;
    } else {
        // It was a draw, so do nothing
        return;
    }
}

// Capitalizes the first letter of the player's/computer's selection
function formatSelection(selection) {
    return selection.charAt(0).toUpperCase() + selection.slice(1);
}