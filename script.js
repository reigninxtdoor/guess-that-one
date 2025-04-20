const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
let guessedLetters=[];
// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
  message.innerText="";
});
const inputValve= function(input){
  const acceptedLetter = /[a-zA-Z]/;
    if(input.length ===0){
      message.innerText="plz enter a letter ";
      // if it is empty
    }
    else if(input.length>1){
message.innerText="too many letters selected.";
//more than 1 selected
    }
else if (input.length(acceptedLetter)){
  message.innerText="wrong character selected, only letters plz";
  // a none letter entered 
}
else{
  message.innerText="youve entered a letter, congradulations"
}
return input;
placeholder();
  }
const makeGuess=function(letter){
  console.log(guessedLetters);
  
}