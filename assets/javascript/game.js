// Variables 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compInput = alphabet[Math.floor(Math.random() * 25)];
var wins = 0;
var losses = 0;
var remainingTurns = 9;
var choices = "";

// Functions

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

function updateTurns() {
    document.querySelector("#remainingTurns").innerHTML = "Remaining Turns: " + remainingTurns;
}

function updateChoices() {
    document.querySelector("#choices").innerHTML = "Your Choices: " + choices;
}

function resetTurns() {
    remainingTurns = 9;
    document.querySelector("#remainingTurns").innerHTML = "Remaining Turns: " + 9;
}

function resetChoices() {
    choices = "";
    document.querySelector("#choices").innerHTML = "Your Choices: " + "";
}

function resetComp() {
    compInput = alphabet[Math.floor(Math.random() * 25)];
}


// Main Game
updateWins();
updateLosses();
resetTurns();
resetChoices();

document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    
    console.log(compInput);
    
    if (alphabet.includes(userInput)) {
        if (compInput === userInput){
            wins++;
            updateWins();
            resetTurns();
            resetChoices();
            resetComp();
        }
        else if (remainingTurns === 0){
            losses++;
            updateLosses();
            resetTurns();
            resetChoices();
            resetComp();
        }
        else {
            remainingTurns--;
            choices = " " + choices + " " + userInput;
            updateChoices();
            updateTurns();
        }
    }
    else {
        updateWins();
        updateLosses();
        resetTurns();
        resetChoices();
    }

}




