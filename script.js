// document.addEventListener('DOMContentLoaded', () => {

    let playerWins = 0;
    let computerWins = 0;

    function getComputerChoice() {
        let number = Math.floor(Math.random() * 3 + 1);
        if (number == 1) {
            return 'rock';
        } if (number == 2) {
            return 'paper'
        } else if (number == 3) {
            return 'scissors'
        }
    }

    function getPlayerChoice() {
        let input = prompt('Rock, Paper, Scissors. Type in "R", "P", or "S" to play');
        if (input.toLowerCase() == "r") {
            player = "rock";
        } if (input.toLowerCase() == "p") {
            player = "paper";
        } if (input.toLowerCase() == "s") {
            player = "scissors"
        } else if (input.toLowerCase() !== "r" && 
                   input.toLowerCase() !== "p" && 
                   input.toLowerCase() !== "s") {
                getPlayerChoice();
        }
        return player;

    }

    function playRound(playerC, computerC) {
        if (playerC === computerC) {
            result = 'Tie';
            console.log('Tie');
        } else if (
            playerC == "rock" && computerC == "scissors" || 
            playerC == "paper" && computerC == "rock" || 
            playerC == "scissors" && computerC == "paper") {
            result =  'Win';
            console.log('Win');
            playerWins++;
            console.log(playerWins);
        } else {
            result = 'L';
            console.log('L');
            computerWins++;
            console.log(computerWins);
        }
    }

    function game() {
        const player = getPlayerChoice();
        const computer = getComputerChoice();
        playRound(player, computer);
        while (playerWins < 5 && computerWins < 5) {
            game();
        }
    }

    game();