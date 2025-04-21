const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters=[];
const updatedGuesses=function(guessedLetters){
guessedLettersElement.innerHTML ="";
emptyArrays=[];
const wordUpper=word.toUpperCase;
const wordArray= wordUpper.split("");
console.log(wordArray);
guessesRight();
}
wordInProgress.innerText=wordShown.join("");



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
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, silly. Try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
}
const guessesRight=function(){
  if(word.toUpperCase())
    message.classList.add("win");
    message.innerHTML=<p class="highlight">You guessed correct the word! Congrats!</p>;
}
  let remainingGuesses= 8;
  const winningGuess=function(guess){
   const wordUp= word.toUpperCase();
    if(wordUp.includes.guess){
 message.innerText = `sorry no correct ${guess}.`;
    remainingGuesses -= 1;
  } else {
    message.innerText = `Good job you have entered ${guess}.`;
  }

  if (remainingGuesses === 0) {
    message.innerHTML = `All out of guesses, The word was <span class="highlight">${word}</span>.`;
  } else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
  } else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  }
    }
  }

