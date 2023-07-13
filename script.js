const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

function getComputerChoice() {
    let computerChoices = ["rock","paper","scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

/*
function getPlayerChoice() {
    let validChoice = 0;
    let playerChoice = "";
    while (validChoice != 1){
        playerChoice = prompt("Rock, Paper, or Scissors?");
        if (!["rock","paper","scissors"].includes(playerChoice.toLowerCase())) {
            console.log("Invalid choice");
        }
        else if (["rock","paper","scissors"].includes(playerChoice.toLowerCase())){
            validChoice = 1;
        }
    }
    return playerChoice;
}
*/

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();

    let playerChoiceInfo = document.querySelector('.playerChoice');
    playerChoiceInfo.textContent = `${playerSelection}`

    let computerChoiceInfo = document.querySelector('.computerChoice');
    computerChoiceInfo.textContent = `${computerSelection}`;

    let resultInfo = document.querySelector('.result-text');

    if (playerSelection == computerSelection){
        resultInfo.textContent="It's a tie!";
    }
    else if (playerSelection == "rock" & computerSelection == "paper"){
        resultInfo.textContent="Computer wins! Paper beats rock.";
    }
    else if (playerSelection == "paper" & computerSelection == "scissors"){
        resultInfo.textContent="Computer wins! Scissors beats paper.";
    }
    else if (playerSelection == "scissors" & computerSelection == "rock"){
        resultInfo.textContent="Computer wins! Rock beats scissors.";
    }
    else if (playerSelection == "rock" & computerSelection == "scissors"){
        resultInfo.textContent="Player wins! Rock beats scissors.";
    }
    else if (playerSelection == "paper" & computerSelection == "rock"){
        resultInfo.textContent="Player wins! Paper beats rock.";
    }
    else if (playerSelection == "scissors" & computerSelection == "paper"){
        resultInfo.textContent="Player wins! Scissors beats paper.";
    }
}
/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection = "";
    let playerSelection = "";

    while ((playerScore < 5) && (computerScore < 5)){
        playerSelection = getPlayerChoice();
        console.clear();
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.charAt(0) == "P"){
            playerScore++;
        }
        else if (roundResult.charAt(0) == "C"){
            computerScore++;
        }
        else if(roundResult.charAt(0) == "I"){

        }
        else {
            console.log("Something went terribly wrong.");
        }
        console.log(`Player chose: ${playerSelection} | Computer chose: ${computerSelection}`);
        console.log(`${roundResult}`);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Player Wins The Game!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer Wins The Game!");
    }
    else {
        console.log("Nobody Wins! (This shouldn't happen)");
    }

}

game();*/