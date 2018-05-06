var wins = 0;
var losses = 0;
var guessesLeft = 09;
var guessesSoFar = []; 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeyup = function(event) {

        
       var html = "<h1>The Psychic Game</h1>" + 
       "<p>Guess what letter I'm thinking of!</p>" +
       "<p>Total Wins: " + 
       wins + 
       "</p>" +
       "<p>Total Losses: " + 
       losses + 
       "</p>" +
       "<p>Guesses Left: " + 
       guessesLeft + 
       "</p>" +
       "<p>Your Guesses so far: " +
       guessesSoFar +
       "</p>"
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
   
    guessesSoFar.push(userGuess);
    if (userGuess == computerGuess) {
        wins++;
        alert('You\'ve guesesed corrrectly. You Won!');
        guessesLeft = 09; 
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You didn\'t guess the correct letter. You lost. Try again.');
        guessesLeft = 09;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }  
 
    
    document.querySelector('#game').innerHTML = html;
}