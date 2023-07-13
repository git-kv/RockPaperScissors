function getComputerChoice() {
    let computerChoices = ["rock","paper","scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    
    playerChoiceInfo.textContent = `${playerSelection}`
   
    computerChoiceInfo.textContent = `${computerSelection}`;

    if (playerSelection == computerSelection){
        resultInfo.textContent="It's a tie!";
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
    else if (playerSelection == "rock" & computerSelection == "paper"){
        resultInfo.textContent="Computer wins! Paper beats rock.";
        computerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
    else if (playerSelection == "paper" & computerSelection == "scissors"){
        resultInfo.textContent="Computer wins! Scissors beats paper.";
        computerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
    else if (playerSelection == "scissors" & computerSelection == "rock"){
        resultInfo.textContent="Computer wins! Rock beats scissors.";
        computerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
    else if (playerSelection == "rock" & computerSelection == "scissors"){
        resultInfo.textContent="Player wins! Rock beats scissors.";
        playerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
    else if (playerSelection == "paper" & computerSelection == "rock"){
        resultInfo.textContent="Player wins! Paper beats rock.";
        playerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
    else if (playerSelection == "scissors" & computerSelection == "paper"){
        resultInfo.textContent="Player wins! Scissors beats paper.";
        playerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }

    if (playerScore == 5) {
        resultInfo.textContent="Player has 5 points! Player wins the game!"
    }
    else if (computerScore == 5) {
        resultInfo.textContent="Computer has 5 points! Computer wins the game!"
    }
}

function resetScores(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = `Player`;
    computerScoreDisplay.textContent = `Computer`;
    resultInfo.textContent = "Scores reset.";
    playerChoiceInfo.textContent = "";
    computerChoiceInfo.textContent = "";
}

const playerButtons = document.querySelectorAll('.playerChoiceBtn');

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5){
            playRound(button.id);
        }
    });
});

const replayButton = document.querySelector('.replay');
replayButton.addEventListener('click', resetScores);

let playerScore = 0;
let computerScore = 0;
let playerChoiceInfo = document.querySelector('.playerChoice');
let computerChoiceInfo = document.querySelector('.computerChoice');
let playerScoreDisplay = document.querySelector('.player');
let computerScoreDisplay = document.querySelector('.computer');
let resultInfo = document.querySelector('.result-text');