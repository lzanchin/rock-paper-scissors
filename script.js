let playerSelection;
let computerSelection;

function getUserChoice() {
    let option;
    do {
        option = prompt("Type your option: ROCK, PAPER or SCISSORS");
        option = option.toUpperCase();        
    } while (option != "ROCK" && option != "PAPER" && option != "SCISSORS");
    console.log("Player chooses: " + option);
    return option;
}

function getComputerChoice() {
    // get a random number between 1 and 3    
    let number = Math.floor(Math.random() * (3-1 + 1) + 1);
    
    // depending on the number, get a different choice
    let choice;    
    if (number == 1) {
        choice = "ROCK";        
    } else if (number == 2) {
        choice = "PAPER";
    } else {
        choice = "SCISSORS";
    }
    console.log("Computer chooses: " + choice);    
    return choice;

    // test return values
    // return "ROCK"
}

function playRound(playerSelection, computerSelection){
    let result;
    if (playerSelection == computerSelection) {
        result = "Draw";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        result = "You win, " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        result = "You lost, " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        result = "You win, " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        result = "You lost, " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        result = "You win, " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        result = "You lost, " + computerSelection + " beats " + playerSelection;
    }
    return result;    
}

function displayResults(playerScore, computerScore){
    console.log("........Checking results........")
    console.log("Player Score: " + playerScore)
    console.log("Computer Score: " + computerScore);        
    if (playerScore > computerScore) {
        console.log("YOU WON!!");        
    } else if (playerScore < computerScore) {
        console.log("YOU LOST!! Best luck next time.");
    } else {
        console.log("THE GAME FINISHED WITH A DRAW.")
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;    
    let roundsLeft = 5;
    let roundResult;
    console.log("........Starting a new game........")
    for (let i = 1; i < 6; i++) {                
        console.log("========== Round " + i + " ==========");
        // if the game continues, then play another round
        roundResult =playRound(getUserChoice(), getComputerChoice());
        if (roundResult.includes("You win")) {
            playerScore++;            
        } else if (roundResult.includes("You lost")) {
            computerScore++;            
        } else {
            console.log("Draw");
        }
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);

        // check if the game is finished        
        if (roundsLeft <= (playerScore - computerScore) || roundsLeft <= (computerScore - playerScore)) {
            break;
        }
        roundsLeft--;        
    }
    displayResults(playerScore, computerScore);    
}
game();
