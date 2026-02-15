const btns = document.querySelectorAll(".btn");
const result = document.getElementById('result');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const restart = document.getElementById('restart')
console.log(btns)

let userScore = 0;
let compScore = 0;


function playRound(playerSelection){
let computerSelection = computerPlay();
if (computerSelection === playerSelection){
    return "it's a tie!"
}else if(
    playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper"
){
    userScore++
    return `You Win! ${playerSelection} beats ${computerSelection}`
}else{
    compScore++
    return `You Lose! ${computerSelection} beats ${playerSelection}`
}
}


function computerPlay(){
    const choices = ["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice];
}

btns.forEach((button)=>{button.addEventListener("click",()=>
    {result.innerText = playRound(button.id);
    userScoreEl.innerHTML = userScore;
    computerScoreEl.innerHTML = compScore;
})});
restart.addEventListener('click',()=>{
    userScore = 0;
    compScore = 0;
    userScoreEl.innerHTML = userScore;
    computerScoreEl.innerHTML = compScore;
    result.innerHTML = ""
})