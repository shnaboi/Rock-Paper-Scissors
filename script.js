// document.addEventListener('DOMContentLoaded', () => {

    let playerWins = 0;
    let playerLoss = 0;
    let roundResult = '';
    let computerChoice = '';

    let userRock = document.getElementById("rock");
    let userPaper = document.getElementById("paper");
    let userScissors = document.getElementById("scissors");

    const winCounter = document.getElementById('Wins');
    const lossCounter = document.getElementById('Loss');
    const winLoseTag = document.getElementById('winLoseTag');
    const computerChose = document.getElementById('computerChose');

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
            result =  'You Win!';
            playerWins++;
            console.log(playerWins);
            console.log('Win');
        } else {
            result = 'You Lose...';
            playerLoss++;
            console.log(playerLoss);
            console.log('L');
        }
        roundResult = result;
        updateScore();
        checkWin();
    
    }

    function getComputerChoice() {
        let number = Math.floor(Math.random() * 3 + 1);
        if (number == 1) {
            computerChoice = 'rock';
            return computerChoice;
        } if (number == 2) {
            computerChoice = 'paper';
            return computerChoice;
        } else if (number == 3) {
            computerChoice = 'scissors';
            return computerChoice;
        }
    }

    function updateScore() {
        winCounter.textContent = `Wins: ${playerWins}`;
        lossCounter.textContent = `Losses: ${playerLoss}`;
        winLoseTag.textContent = `${roundResult}`;
        computerChose.textContent = `Computer chose ${computerChoice}`;
    }

    function checkWin() {
        return playerWins === 5 || playerLoss === 5;
    }

    // CHECKLIST
    // Display results of each round
    // Add a way to play again if you win or lose 5
    // Style these once complete

    // FEATURES TO ADD
    // add round counter
    // add tie counter
    // add alerts for if you lost or won
    // add streak counters (for if you lose, tie, or win 3+ in a row)