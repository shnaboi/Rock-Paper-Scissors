// document.addEventListener('DOMContentLoaded', () => {

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
        } else if (input.toLowerCase() == "s") {
            player = "scissors"
        }
        return player;
    }

    function playRound(player, computer) {
        player = getPlayerChoice();
        computer = getComputerChoice();
        result = `${player} + ${computer}`;
        console.log(result);
    }

    // function game() {

    //     playRound();
    
    // }

    playRound();