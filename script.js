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

  console.log(`You chose ${playerInput.toLowerCase()}!`);
  return playerChoice;
  

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