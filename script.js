// document.addEventListener('DOMContentLoaded', () => {

    let playerWins = 0;
    let playerLoss = 0;
    let roundResult = '';
    let computerChoice = '';
    let round = 0;

    let userRock = document.getElementById("rock");
    let userPaper = document.getElementById("paper");
    let userScissors = document.getElementById("scissors");

    const winCounter = document.getElementById('Wins');
    const lossCounter = document.getElementById('Losses');
    const winLoseTag = document.getElementById('winLoseTag');
    const computerChose = document.getElementById('computerChose');
    const roundCounter = document.getElementById('roundCounter');

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
            round++;
            console.log('Tie');
        } else if (
            playerC == "rock" && computerC == "scissors" || 
            playerC == "paper" && computerC == "rock" || 
            playerC == "scissors" && computerC == "paper") {
            result =  'You Win!';
            playerWins++;
            round++;
            console.log(playerWins);
            console.log('Win');
        } else {
            result = 'You Lose...';
            playerLoss++;
            round++;
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
        roundCounter.textContent = `Round: ${round}`;
    }

    function checkWin() {
        return playerWins === 5 || playerLoss === 5;
    }

    // CHECKLIST
    // Display results of each round
    // Add a way to play again if you win or lose 10
    // Add green check or red X after button clicks to help show win/loss
    // CSS

    // FEATURES TO ADD
    // add round counter
    // add tie counter
    // add streak counters (for if you lose, tie, or win 3+ in a row)