function getComputerSelection() {
    const weapons = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * (weapons.length - 1));

    return weapons[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

function game() {
    for(let i = 0; i < 3; i++) {

        const playerSelection = prompt("Type your weapon");
        const computerSelection = getComputerSelection();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();