// document.addEventListener('DOMContentLoaded', () => {

    let player;

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

    function playRound(player, computer) {
        
        getComputerChoice();

    }

    function game() {

        playRound();
    }

    function getPlayerChoice() {
        let input = prompt('Rock, Paper, Scissors. Type in "R", "P", or "S" to play');
        if (input.toLowerCase() == "r") {
            player = "rock";
        } if (input.toLowerCase() == "p") {
            player = "paper";
        } else if (input.toLowerCase() == "s") {
            player = "scissors"
        }
        console.log(player)
    }

    getPlayerChoice();