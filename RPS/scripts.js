console.log("Hello world!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if (num < (1/3)) {
        return "rock";
    }
    else if (num < (2/3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let num = prompt("Please enter rock, paper, or scissors: ")
    if (num.toLowerCase() === "rock") return "rock";
    else if (num.toLowerCase() === "paper") return "paper";
    else if (num.toLowerCase() === "scissors") return "scissors";
}

function playRound(human, computer) {
    // 0 - tie, 1 - human wins, 2 - computer wins
    let result = 0;
    
    if (human === "rock") {
        if (computer === "rock") result = 0;
        else if (computer === "paper") result = 2;
        else result = 1;
    }
    else if (human === "paper") {
        if (computer === "rock") result = 1;
        if (computer === "paper") result = 0;
        else result = 2;
    }
    else {
        if (computer === "rock") result = 2;
        else if (computer === "paper") result = 1;
        else result = 0;
    }

    switch (result) {
        case 0:
            console.log(`Tie! Both players chose ${human}!`);
            return 0;
            break;
        case 1:
            console.log(`Human wins! ${human} beats ${computer}!`);
            return 1;
            break;
        case 2:
            console.log(`Computer wins! ${computer} beats ${human}!`);
            return 2;
            break;
    }
}

function playGame(){
    let computerScore = 0
    let humanScore = 0

    for (i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice()
        let humanSelection = getHumanChoice()

        let gameResult = playRound(humanSelection, computerSelection)

        switch (gameResult) {
            case 1:
                humanScore += 1;
                break;
            case 2:
                computerScore += 1;
                break;
        }

        console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
    }

    if (humanSelection > computerSelection) {
        console.log("Human wins!")
    }
    else {
        console.log("Computer wins!")
    }
}

playGame()