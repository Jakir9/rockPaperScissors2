const options = ["rock", "paper", "scissors"];

var totalScore=0;
var totalScoreText;
var botMove;

min = 0
max = 3

let gamesPlayed = 0;
let numOfWins = 0;
let numOfLosses = 0;
let numOfDraws = 0;

function getRandomInt(min, max) { //Gets us the random computer choice of rock paper scissors
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  let arrayMoves = { 0:"rock", 
                     1:"paper",
                     2:"scissors"
};

function computerPlay() {
  /*
  Randomly generates a computer move  
  This function usse the return keyword to return a string of either "rock", "paper", or "scissors".
  */
 
  let botMove = arrayMoves[getRandomInt(min,max)];
  return botMove;
}

//username 
let nameInvalid = true

function firstLetterCapital(str) {
  return /^[A-Z]/.test(str); //capital first letter-return true or false

}

function onlyLetters(str) {
  return /^[A-Za-z]*$/.test(str);// checks letter- return true or false
}

while (nameInvalid){

  var username = prompt("Please enter a username. You cannot enter a username longer than 10 characters")

  if (username !== null ) { //if username is not null, check if it is too long or if it is not only letters or if it does not start with a capital letter
    
  if (username.length > 10){
      alert ("Username is too long")
  } 
  
  else if(!onlyLetters(username)){ //only letters
      alert("Please enter only letters");
  }
  
  else if(!firstLetterCapital(username)){ //check if username starts with a letter and it is capitalised
      alert("First letter needs to be capitalised");
  } 
  
  else {
      nameInvalid = false;
  }

  }

  }


//Logic used to compare the users choice and the computers choice and return the result in a string
  function getWinner(player1, player2) {
    let score;
    let results;
  
    switch(player1) {
      case player2:
        score = 0;
        gamesPlayed++;
        numOfDraws++;
        break;
      case "rock":
        if(player2 === "paper") {
          score = -1;
          gamesPlayed++;
          numOfLosses++;
        } else if(player2 === "scissors") {
          score = 1;
          totalScore++;
          gamesPlayed++;
          numOfWins++;
        }
        break;
      case "scissors":
        if(player2 === "paper") {
          score = 1;
          totalScore++;
          gamesPlayed++;
          numOfWins++;
        } else if(player2 === "rock") {
          score = -1;
          gamesPlayed++;
          numOfLosses++;
        }
        break;
      case "paper":
        if(player2 === "scissors") {
          score = -1;
          gamesPlayed++;
          numOfLosses++;
        } else if(player2 === "rock") {
          score = 1;
          totalScore++;
          gamesPlayed++;
          numOfWins++;
        }
        break;
    }
  
    switch(score) {
      case 1:
        results = `You have won ${username}! \n
        Computer played ${player2}`;

        totalScoreText = 
        `Total Score: ${totalScore}\n
        Games Played: ${gamesPlayed}\n
        Total Wins: ${numOfWins}\n
        Total Losses: ${numOfLosses}\n
        Total Draws: ${numOfDraws}`;
  
        break;
      case 0:
        results = `You have drawn ${username}!\n
          Computer played ${player2} \n`;
        totalScoreText = 
         `Total Score: ${totalScore}\n
          Games Played: ${gamesPlayed}\n
          Total Wins: ${numOfWins}\n
          Total Losses: ${numOfLosses}\n
          Total Draws: ${numOfDraws}`;
        break;
      case -1:
        results = `You have lost ${username}! \n
          Computer played ${player2}\n`;

        totalScoreText = 
          `Total Score: ${totalScore}\n
          Games Played: ${gamesPlayed}\n
          Total Wins: ${numOfWins}\n
          Total Losses: ${numOfLosses}\n
          Total Draws: ${numOfDraws}`;

        break;
    }
  
    return results;
  }

function playRound(playerSelection, computerSelection) {
  /*
  TODO: Insert your code for your function that decides who the winner is here (from task 2). 

  This function should take in two moves (the player's move and the computer's move) and return a string with the game result.

  For example, if the player's move is rock and the computer's move is scissors, the function should use the return keyword to return "You win!"
  */
  
   let result = getWinner(playerSelection, computerSelection); 
   return result;
}

function updateResultText(result) {
  const resultText = document.getElementById("result-text");
  resultText.textContent = result;

  const resultScore = document.getElementById("result-score-text");
  resultScore.textContent = totalScoreText;
}
function handleClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  updateResultText(result);
}
const buttons = document.querySelectorAll(".game-options button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
