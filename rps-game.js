// Start the game
game();

// Carries out a game of five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = promptPlayer();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

// Receives and returns player's selection
function promptPlayer() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");

    // If user input is null or empty, prompt the user again
    if (playerSelection == null || playerSelection === "") {
        promptPlayer();
    }

    // Convert the string to lowercase for easy comparisons
    playerSelection = playerSelection.toLowerCase()

    /*
     Ensure that the user entered a valid selection for the game. 
     Otherwise, prompt them again
     */
    if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection == "scissors")) {
        promptPlayer();
    }

    return playerSelection;
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