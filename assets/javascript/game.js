$(document).ready(function() {

// create an array of words
var wordsToGuess = [
    "green day",
    "good charlotte",
    "fall out boy",
    "all american rejects",
    "all time low",
    "my chemical romance",
    "jimmy eat world",
    "yellowcard",
    "panic at the disco",
    "simple plan"
]

const maxGuess = 10
var pauseGame = false

var guessedLetter = []
var guessingWord = []
var wordToMatch
var numberGuess
var wins = 0

}




// pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// this empty array lets us match the number of letters in the word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

