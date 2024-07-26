const options = ["paper", "rock", "scissors", "paper"]
let humanScore = 0;
let computerScore = 0;
let roundPhase = 0;



function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];

}

function getHumanChoice() {
    return options[parseInt(prompt("Choose your option: \n 0 = Paper.\n 1 = Rock. \n 2 = Scissors."))];
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    getComputerChoice();
    getHumanChoice();
    console.log(computerSelection);
    console.log(humanSelection);
    if (computerChoice === humanChoice) {
        // console.log(`Is a tie! both had selected ${computerSelection}`);
        console.log(`Computer: ${computerScore} \n Player: ${humanScore}`);

    } else if (computerChoice === options[0] && humanChoice === options[getComputerChoice + 1]) {
        console.log("Computer wins!");
        computerScore++;
        console.log(`Computer: ${computerScore}\nPlayer: ${humanScore}`);
   
    } else {
        console.log("Player wins!");
        humanScore++;;
        console.log(`Computer: ${computerScore} \n Player: ${humanScore}`);
       
    }
}

// const round = playRound(humanSelection, computerSelection);

function playGame() {
    playRound();
    if (roundPhase >= 5) {
        if (computerScore > humanScore) {
            console.log("Computer has won the match");
        } else {
            console.log("Congratulations, You won the match!! ");
        }
    } else {
        playRound();
    }
}



playRound();
// playGame();





/* 
creacion de un juego en el que la computadora elije al azar entre piedra papel tijeras, y el jugador tambien debe elegir una de las opciones.
si el jugador elige papel y la maquina piedra, maquina pierde
si el jugador elige piedra y la maquina tijeras, maquina pierde
si el jugador elije tijeras y la maquina papel, maquina pierde, si el de al reves maquina gana.
si ambos elije lo mismo empate.
se añade un punto a un contador por cada vez que se gane.
el que llegue a 3 primero gana.
*/