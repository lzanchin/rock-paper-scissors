let playerSelection;
let computerSelection;
let rounds = 0;
let playerScore = 0;
let computerScore = 0;    

const title = document.querySelector(".title");
const resultsContainer = document.querySelector("#results");

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
    return choice;    
}

function playRound(playerSelection, computerSelection){
    let result;
    const roundDetails = document.createElement("div");
    const roundDescription = document.createElement("p");
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
    roundDescription.textContent = result;
    roundDetails.append(roundDescription);
    resultsContainer.append(roundDetails);
    return result;    
}

function displayResults(playerScore, computerScore) {
    const content = document.createElement("div");
    const line = document.createElement("hr");

    const resultsTitle = document.createElement("h3");
    resultsTitle.textContent = `Checking results for round ${rounds}`;
    content.append(resultsTitle);

    const participantsResult = document.createElement("p");
    participantsResult.textContent = `Player Score: ${playerScore} \n Computer Score: ${computerScore}`;
    content.append(participantsResult);
    content.append(line);

    resultsContainer.append(content);

    title.textContent = `Round ${rounds+1} - Player: ${playerScore}, Computer: ${computerScore}`;    

    if (playerScore >= 5 || computerScore >= 5) {
        title.textContent = `GAME OVER - Player: ${playerScore}, Computer: ${computerScore}`;        
        buttons.forEach(button => {
            button.style.display = "none";
        });
        const finalResult = document.createElement("p");
        if (playerScore > computerScore) {
            finalResult.textContent = "YOU WON!!";        
        } else {
            finalResult.textContent = "YOU LOST!! Best luck next time.";
        }
        resultsContainer.append(finalResult);
    };      
};

function game(option){        
    rounds += 1;
    let roundResult;    

    roundResult =playRound(option, getComputerChoice());
        if (roundResult.includes("You win")) {
            playerScore++;            
        } else if (roundResult.includes("You lost")) {
            computerScore++;            
        }      

    displayResults(playerScore, computerScore);
        
};

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        game(button.id.toUpperCase());
    });
});