const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerChoice = document.querySelector("#playerChoice");
const compChoice = document.querySelector("#compChoice");
const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");
const resultsText = document.querySelector("#resultsText");

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice= "";

rock.addEventListener("click", function(){
    humanChoice = "rock";
    playRound();
});
paper.addEventListener("click", function(){
    humanChoice = "paper";
    playRound();
});
scissors.addEventListener("click", function(){
    humanChoice = "scissors";
    playRound();
});


function getComputerChoice(){
    let computerNumChoice = Math.floor(Math.random() * 3) + 1;
    if(computerNumChoice === 1){
        computerChoice = "rock";
    }
    else if(computerNumChoice === 2){
        computerChoice = "paper";
    }
    else if(computerNumChoice === 3){
        computerChoice = "scissors";
    }
    return computerChoice;
}


function playRound(){
    getComputerChoice();
    
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }

    if(humanScore > computerScore){
        playerChoice.textContent = `Player chose: ${humanChoice}`;
        compChoice.textContent = `Computer chose: ${computerChoice}`;
        resultsText.textContent = "You won the game!";
    }
    else if(computerScore > humanScore){
        playerChoice.textContent = `Player chose: ${humanChoice}`;
        compChoice.textContent = `Computer chose: ${computerChoice}`;
        resultsText.textContent = "The computer won the game.";
    }
    else{
        playerChoice.textContent = `Player chose: ${humanChoice}`;
        compChoice.textContent = `Computer chose: ${computerChoice}`;
        resultsText.textContent = "The game was a tie!";
    }
}





