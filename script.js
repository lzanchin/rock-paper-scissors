let choice;

function getUserChoice() {
    let option;
    do {
        option = prompt("Type your option: ROCK, PAPER or SCISSORS");
        option = option.toUpperCase();        
    } while (option != "ROCK" && option != "PAPER" && option != "SCISSORS");
    return option;
}

choice = getUserChoice();
console.log(choice);