function getComputerChoice(){
    let computerNumChoice = Math.floor(Math.random() * 3) + 1;

    if(computerNumChoice === 1){
        let computerChoice = "rock";
        console.log(`Computer chose: ${computerChoice}`);
        return computerChoice;
    }
    else if(computerNumChoice === 2){
        let computerChoice = "paper";
        console.log(`Computer chose: ${computerChoice}`);
        return computerChoice;
    }
    else if(computerNumChoice === 3){
        let computerChoice = "scissors";
        console.log(`Computer chose: ${computerChoice}`);
        return computerChoice;
    }
}

function getHumanChoice(){
    let getHumanNumChoice = prompt('Chose: "rock", "paper", "scissors".').toLowerCase();

    if(getHumanNumChoice === "rock"){
        let humanChoice = "rock";
        console.log(`Player chose: ${humanChoice}`);
        return humanChoice;
    }
    else if(getHumanNumChoice === "paper"){
        let humanChoice = "paper";
        console.log(`Player chose: ${humanChoice}`);
        return humanChoice;
    }
    else if(getHumanNumChoice === "scissors"){
        let humanChoice = "scissors";
        console.log(`Player chose: ${humanChoice}`);
        return humanChoice;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
        console.log(`Your final score is: ${humanScore}`);
        console.log(`The computers final score is: ${computerScore}`);
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
        return computerScore;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
        return humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
        return humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
        return computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;
        return computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper.");
        humanScore++;
        return humanScore;
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    for (let i = 0; i < 5; i++){
        let computerSelection  = getComputerChoice();
        let humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();

console.log(`Your final score is: ${humanScore}`);
console.log(`The computers final score is: ${computerScore}`);

if(humanScore > computerScore){
    console.log("You won the game!");
}
else if(computerScore > humanScore){
    console.log("The computer won the game.");
}
else{
    console.log("The game was a tie!");
}


