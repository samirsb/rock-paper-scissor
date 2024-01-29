// Make computer chose paper, rock or scissor and store in a variable
let getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3)
    return randomChoice
};

// Make user imput a choice and store in another variable
let userChoice = 4;
let userPoints = 0;
let computerPoints = 0;
let computerTranslation = 0;

for (let counter = 0; counter < 3 ;) {

    let getUserChoice = window.prompt("Let's play Ja-Janken \nChoose your weapon: \nRock, Paper or Scissors?");
    let userInput = getUserChoice.toLowerCase();

    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
        if (userInput == 'rock') {    
            userChoice = 0
        }
        else if (userInput == 'paper') {
            userChoice = 1
        }
        else {
            userChoice = 2
        }

        let computerChoice = getComputerChoice();

        if (computerChoice === 0 && userChoice === 1) {
            userPoints++;
            counter++;
        }
        else if (computerChoice === 0 && userChoice === 2) {
            computerPoints++;
            counter++;
        }
        else if (computerChoice === 1 && userChoice === 0) {
            computerPoints++;
            counter++;
        }
        else if (computerChoice === 1 && userChoice === 2) {
            userPoints++;
            counter++;
        }
        else if (computerChoice === 2 && userChoice === 0) {
            userPoints++;
            counter++;
        }
        else if (computerChoice === 2 && userChoice === 1) {
            computerPoints++;
            counter++;
        }
        else {
            window.alert("It's a tie! One round it's add up");  
        }

        if (computerChoice == 0) {    
            computerTranslation = "Rock"
        }
        else if (computerChoice == 1) {
            computerTranslation = "Paper"
        }
        else {
            computerTranslation = "Scissors"
        }
        window.alert(`Round ${counter}\nUser choice: ${userInput} Computer choice: ${computerTranslation}\nUser points: ${userPoints} Computer points: ${computerPoints}`)
    }
    else {
        window.prompt("Oops! That's not a valid weapon. Let's try again \nChoose your weapon: \nRock, Paper or Scissors?");  
    }
}   
if (userPoints > computerPoints) {
    window.alert("Congratulations! You won Ja-Janken");  
}
else { 
    window.alert("You lost! Maybe Ja-Janken is not for you");   
}

// compare computer and user varibles to see who wins or if it need rematch
// show a match result on console
