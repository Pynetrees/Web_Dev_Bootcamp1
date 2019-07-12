//create secret number
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);
//check if guess is right
if(guess===secretNumber){
  alert("You got it right!");
}
//other wise, check if high 
else if(guess>secretNumber){
  alert("Too High, Guess Again.");
}
//or low
else{
  alert("Too Low, Guess Again.")
}