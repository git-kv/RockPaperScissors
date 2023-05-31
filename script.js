function getComputerChoice() {
    let computerChoices = ["rock","paper","scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
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

    while (playerScore < 5 || computerScore < 5){
        playerSelection = prompt("Rock, Paper, or Scissors?");
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.charAt(0) == "P"){
            playerScore++;
        }
        else if (roundResult.charAt(0) == "C"){
            computerScore++;
        }
        else {
            console.log("Something went terribly wrong.");
        }
        console.log(`Player chose: ${playerSelection} | Computer chose: ${computerSelection}`);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

}

game();