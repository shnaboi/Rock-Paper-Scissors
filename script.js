// document.addEventListener('DOMContentLoaded', () => {

    let playerWins = 0;
    let computerWins = 0;
    let playerInput = '';
    console.log(playerInput);

    let userRock = document.getElementById("rock");
    let userPaper = document.getElementById("paper");
    let userScissors = document.getElementById("scissors");

    let inputRock = userRock.addEventListener('click', function() {
        playerInput = 'rock';
        console.log(playerInput)
    });

    let inputPaper = userPaper.addEventListener('click', function() {
        playerInput =  'paper';
        console.log(playerInput)
    });
    let inputScissors = userScissors.addEventListener('click', function() {
        playerInput = 'scissors';
        console.log(playerInput)
    });

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
        if (playerInput !== '') {
            return playerInput;
        }

        
        // if (input.toLowerCase() == "r") {
        //     player = "rock";
        // } if (input.toLowerCase() == "p") {
        //     player = "paper";
        // } if (input.toLowerCase() == "s") {
        //     player = "scissors"
        // } else if (input.toLowerCase() !== "r" && 
        //            input.toLowerCase() !== "p" && 
        //            input.toLowerCase() !== "s") {
        //         getPlayerChoice();
        // }
        // return player;

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

    // add round counter
    // add tie counter
    // add alerts for if you lost or won
    // add streak counters (for if you lose, tie, or win 3+ in a row)
    // add a way to play again if you win or lose 5