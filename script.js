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

function getPlayerChoice(){
  let playerChoice;

  while(checkForValidInput(playerChoice) == false){

    playerChoice = prompt("Enter choice:", "");

  }

  console.log(`You chose ${playerChoice.toLowerCase()}!`);
  return playerChoice.toLowerCase();
  

}

function checkForValidInput(string){

  if(string == undefined){
    console.log("Please enter your choice:")
    return false;
  }

  let lowerCaseInput = string.trim().toLowerCase();

  if(lowerCaseInput === "rock" || lowerCaseInput === "paper" || lowerCaseInput === "scissors"){
    return true;
  }
  else{
    console.log("Invalid choice.");
    return false;
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
        
      default:
        console.log("Invalid player choice.");


    }
  }
}

function playRound(){
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  return checkWinningChoice(playerChoice, computerChoice);
}

function game(){
  const numberOfRoundsToWin = (parseInt(prompt("First to:","2")) || 2);

  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0; i < numberOfRoundsToWin; i++){
    let playerHasWon = playRound();

    while(playerHasWon == undefined){
      playerHasWon = playRound();
    }
    
    if (playerHasWon) playerScore++;
    else computerScore++;

    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

    if(playerScore === numberOfRoundsToWin){
      console.log("Player Wins!");
      return;
    }
    if(computerScore === numberOfRoundsToWin){
      console.log("Computer wins!");
      return;
    }



  }
  
}

