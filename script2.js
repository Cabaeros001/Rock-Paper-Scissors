const options = ["Paper", "Rock", "Scissors"]
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];

}

function getHumanChoice() {
    return options[parseInt(prompt("Choose your option: \n 0 = Paper.\n 1 = Rock. \n 2 = Scissors."))];
}



function playRound(humanChoice, computerChoice) {

    if ( humanChoice === computerChoice) {
        console.log(`It's a tie! both had ${computerChoice} selected`);

    } else if(computerChoice === options[1] && humanChoice === options[0]) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if(computerChoice === options[2] && humanChoice === options[1]) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if(computerChoice === options[0] && humanChoice === options[2]) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if (humanChoice === options[1] && computerChoice === options[0]) {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === options[2] && computerChoice === options[1]) {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === options[0] && computerChoice === options[2]) {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log(`Computer: ${computerScore} \nYou: ${humanScore}`);

    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    if (roundCounter <= 5) {
        playRound();
    } else {
        console.log("finish!");
        console.log(`Computer: ${computerScore} \nYou: ${humanScore}`);
    }
}


playGame();