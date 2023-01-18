// document.addEventListener('DOMContentLoaded', () => {

    let playerWins = 0;
    let computerWins = 0;

    let userRock = document.getElementById("rock");
    let userPaper = document.getElementById("paper");
    let userScissors = document.getElementById("scissors");

    userRock.addEventListener('click', () => getPlayerChoice('rock'));
    userPaper.addEventListener('click', () => getPlayerChoice('paper'));
    userScissors.addEventListener('click', () => getPlayerChoice('scissors'));

    function getPlayerChoice(playerC) {

        const computerC = getComputerChoice();
        playRound(playerC, computerC)

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

    function game() {
        
    }

    // add round counter
    // add tie counter
    // add alerts for if you lost or won
    // add streak counters (for if you lose, tie, or win 3+ in a row)
    // add a way to play again if you win or lose 5