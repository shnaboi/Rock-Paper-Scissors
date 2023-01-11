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
        } else {
            result = 'L';
            console.log('L');
        }
    }

    function game() {
        const player = getPlayerChoice();
        const computer = getComputerChoice();
        playRound(player, computer);
    
    }

    game();