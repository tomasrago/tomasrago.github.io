const score = document.querySelector(".scoreboard");
const message = document.querySelector("#message");
const choiceBar = document.querySelector(".choice-bar");
const settingsBar = document.querySelector(".settings-bar");
const choiceButtons = document.querySelectorAll(".choice-button");
const playButton = document.querySelector("#play-button");
const bestOfButton = document.querySelector("#bestof-button");
const playerPortrait = document.querySelector("#player-box");
const computerPortrait = document.querySelector("#computer-box");

let numberOfRoundsToWin = (+bestOfButton.innerText.slice(-1) + 1)/2;

let playerScore = 0;
let computerScore = 0;

let playerChoice = "";
let computerChoice = "";

let round = 1;

/*window.addEventListener("click", ( ) =>{
  const body = document.querySelector("body");
  body.setAttribute("style", `background-color: rgb(${random(254)},${random(254)},${random(254)});`);
})*/

bestOfButton.addEventListener("click", () => {

  switch (bestOfButton.innerText){
    case "Best of 5":
      bestOfButton.innerText = "Best of 3";
      numberOfRoundsToPlay = +bestOfButton.innerText.slice(-1);
      break;
    case "Best of 3":
      bestOfButton.innerText = "Best of 1";
      numberOfRoundsToPlay = +bestOfButton.innerText.slice(-1);
      break;
    case "Best of 1":
      bestOfButton.innerText = "Best of 5";
      numberOfRoundsToPlay = +bestOfButton.innerText.slice(-1);
      break;
    
    return;
  }


})

playButton.addEventListener("click", () =>{

  score.innerText = `${playerScore} - ${computerScore}`;
  message.innerText = `Press a button!`;

  settingsBar.setAttribute("style", "display: none;");
  choiceBar.setAttribute("style", "display: flex;");
  numberOfRoundsToWin = (+bestOfButton.innerText.slice(-1) + 1)/2;


})

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", function(e){
    console.log(e.target);
    playerChoice = e.target.dataset.type;
    play();
  });
})


function play(){

  computerChoice = getComputerChoice();

  playerPortrait.setAttribute("src", `img/${playerChoice}.jpg`);

  computerPortrait.setAttribute("src", `img/${computerChoice}.jpg`);

  let playerWins = checkWinningChoice(playerChoice, computerChoice);
  if(playerWins == undefined) return;
  if(playerWins) playerScore++;
  if(!playerWins) computerScore++;

  score.innerText = `${playerScore} - ${computerScore}`;

  if(playerScore == numberOfRoundsToWin){

    message.innerText = "You win!";

    choiceBar.setAttribute("style", "display: none;");
    settingsBar.setAttribute("style", "display: flex;");
    playerScore = 0;
    computerScore = 0;

  }
  
  if(computerScore == numberOfRoundsToWin){
    message.innerText = "You lose!";

    choiceBar.setAttribute("style", "display: none;");
    settingsBar.setAttribute("style", "display: flex;");

    playerScore = 0;
    computerScore = 0;
  }



}


function random(number){
  return Math.floor(Math.random() * number);
}

function getComputerChoice(){
  const randomNumber = random(3);

  switch (randomNumber){

    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
    default:
      return "Invalid number";

  }

}




function checkWinningChoice(playerChoice, computerChoice){

  const choicesMessage = `You chose ${playerChoice} and the computer chose ${computerChoice}.`;
  const winMessage = `${choicesMessage} You win!`;
  const loseMessage = `${choicesMessage} You lose!`;
  const drawMessage = `${choicesMessage} It's a draw!`;

  if(playerChoice === computerChoice){
    console.log(drawMessage);
    return undefined;
  }
  else{
    switch(playerChoice){
      case "rock":
        if(computerChoice === "paper"){
          console.log(loseMessage);
          return false;
        } 
        else{
          console.log(winMessage);
          return true;
        } 

      case "paper":
        if(computerChoice === "scissors"){
          console.log(loseMessage);
          return false;
        } 
        else{
          console.log(winMessage);
          return true;
        } 
        
      case "scissors":
        if(computerChoice === "rock"){
          console.log(loseMessage);
          return false;
        } 
        else{
          console.log(winMessage);
          return true;
        } 
      


    }
  }
}


