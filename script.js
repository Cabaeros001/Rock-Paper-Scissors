const options = ["Paper", "Rock", "Scissors", "Paper"]
let pointsComputer = 0;
let pointsUser = 0;

function() {let randomOption = options[Math.floor(Math.random()*3)];
console.log("Computer has " + randomOption + " selected.");}

function PlayerOption() {
let userOption = options[parseInt(prompt("Choose your option: \n 0 = Paper.\n 1 = Rock. \n 2 = Scissors."))];
console.log("Player has " + userOption + " selected.");
}


function chooseWinner() {
    if(randomOption === userOption) {
        console.log("Is a macht!");
        console.log(`Computer: ${pointsComputer} \n Player: ${pointsUser}`)
    } else if (randomOption === options[0] && userOption === options[randomOption + 1]) {
        console.log("Computer wins!");
        pointsComputer++;
        console.log(`Computer: ${pointsComputer}\nPlayer: ${pointsUser}`)
        

    } else {
        console.log("Player wins!");
        pointsUser++;;
        console.log(`Computer: ${pointsComputer} \n Player: ${pointsUser}`)
        userOption;

    }
}

chooseWinner();



/* 
creacion de un juego en el que la computadora elije al azar entre piedra papel tijeras, y el jugador tambien debe elegir una de las opciones.
si el jugador elige papel y la maquina piedra, maquina pierde
si el jugador elige piedra y la maquina tijeras, maquina pierde
si el jugador elije tijeras y la maquina papel, maquina pierde, si el de al reves maquina gana.
si ambos elije lo mismo empate.
se añade un punto a un contador por cada vez que se gane.
el que llegue a 3 primero gana.
*/