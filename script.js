let choice;

function getUserChoice() {
    let option;
    do {
        option = prompt("Type your option: ROCK, PAPER or SCISSOR");
        option = option.toUpperCase();        
    } while (option != "ROCK" && option != "PAPER" && option != "SCISSOR");
    return option;
}

choice = getUserChoice();
console.log(choice);