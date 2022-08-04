let playerSelection;
let computerSelection;

function getUserChoice() {
    let option;
    do {
        option = prompt("Type your option: ROCK, PAPER or SCISSORS");
        option = option.toUpperCase();        
    } while (option != "ROCK" && option != "PAPER" && option != "SCISSORS");
    return option;
}

function getComputerChoice() {
    // get a random number between 1 and 3    
    let number = Math.floor(Math.random() * (3-1 + 1) + 1);
    
    // depending on the number, get a different choice    
    if (number == 1) {
        return "ROCK";        
    } else if (number == 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }

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

console.log(playRound(getUserChoice(), getComputerChoice()));
