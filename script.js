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
let numGames = 0;
let maxGames = 5;

// rock.addEventListener("click", function(){
//     humanChoice = "rock";
//     numGames++;
//     playRound();
//     return numGames;
// });
// paper.addEventListener("click", function(){
//     humanChoice = "paper";
//     numGames++;
//     playRound();
//     return numGames;
// });
// scissors.addEventListener("click", function(){
//     humanChoice = "scissors";
//     numGames++;
//     playRound();
//     return numGames;
// });


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
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice){
        numGames++;
        console.log(numGames, humanScore, computerScore);
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        numGames++;
        console.log(numGames, humanScore, computerScore);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        numGames++;
        humanScore++;
        console.log(numGames, humanScore, computerScore);
        
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        numGames++;
        humanScore++;
        console.log(numGames, humanScore, computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        numGames++;
        computerScore++;
        console.log(numGames, humanScore, computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        numGames++;
        computerScore++;
        console.log(numGames, humanScore, computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        numGames++;
        humanScore++;
        console.log(numGames, humanScore, computerScore);
    }

    if (numGames < maxGames){
        if(humanScore > computerScore){
            playerChoice.textContent = `Player chose: ${humanChoice}`;
            compChoice.textContent = `Computer chose: ${computerChoice}`;
        }
        else if(computerScore > humanScore){
            playerChoice.textContent = `Player chose: ${humanChoice}`;
            compChoice.textContent = `Computer chose: ${computerChoice}`;
        }
        else if(computerScore === humanScore){
            playerChoice.textContent = `Player chose: ${humanChoice}`;
            compChoice.textContent = `Computer chose: ${computerChoice}`;
        }
    }
    else {
        const finalResult = humanScore > computerScore ? "You won the game!" :
                            humanScore < computerScore ? "The computer won the game." :
                            "The game was a tie!";
        resultsText.textContent = finalResult;
        disableButtons();
    }
}


function disableButtons() {
    rock.removeEventListener("click", rockClickHandler);
    paper.removeEventListener("click", paperClickHandler);
    scissors.removeEventListener("click", scissorsClickHandler);
}

function rockClickHandler() {
    humanChoice = "rock";
    playRound();
}

function paperClickHandler() {
    humanChoice = "paper";
    playRound();
}

function scissorsClickHandler() {
    humanChoice = "scissors";
    playRound();
}

rock.addEventListener("click", rockClickHandler);
paper.addEventListener("click", paperClickHandler);
scissors.addEventListener("click", scissorsClickHandler);


