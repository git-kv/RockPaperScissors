function getComputerChoice() {
    let computerChoices = ["rock","paper","scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if (playerSelection == "rock" & computerSelection == "paper"){
        return "Computer wins! Paper beats rock.";
    }
    else if (playerSelection == "paper" & computerSelection == "scissors"){
        return "Computer wins! Scissors beats paper.";
    }
    else if (playerSelection == "scissors" & computerSelection == "rock"){
        return "Computer wins! Rock beats scissors.";
    }
    else if (playerSelection == "rock" & computerSelection == "scissors"){
        return "Player wins! Rock beats scissors."
    }
    else if (playerSelection == "paper" & computerSelection == "rock"){
        return "Player wins! Paper beats rock."
    }
    else if (playerSelection == "scissors" & computerSelection == "paper"){
        return "Player wins! Scissors beats paper.";
    }
}

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

// game();