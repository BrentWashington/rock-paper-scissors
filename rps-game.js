// Start the game
game();

// Carries out a game of five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = "rock";
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

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
    // The player wins
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }

    // The computer wins
    if (computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }

    // It's a draw
    if (playerSelection === computerSelection) {
        return `It's a draw! You both chose ${playerSelection}!`;
    }
}