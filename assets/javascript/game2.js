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

var guessedLetters = []
var guessingWord = []
var wordToMatch
var numberOfGuesses
var wins = 0

 // Wait for key press
 document.onkeypress = function(event) {
    // Make sure key pressed is an alpha character
    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase())
    }

function checkforLetter(letter) {
// look for letter -  double check this code
for (var i=0, j = wordToMatch.length; i<j; i++) {
    if (letter === wordToMatch[i]) {
        guessingWord[i] = letter
        foundLetter = true
        // if guessing work matches random word
        if (guessingWord.join("") === wordToMatch) {
            // increase # of wins
            wins++
            pauseGame = true
            updateDisplay()
            setTimeout(resetGame,3000)
        }
    }
}

// check if incorrect guess is on list
if (!guessedLetters.includes(letter)) {
    // Add incorrect letter to guessed letter list
    guessedLetters.push(letter)
    // Decrease the number of remaining guesses
    numberOfGuesses--
} 
    if (numberOfGuesses === 0) {
        // Display word before resetting game
        guessingWord = wordToMatch.split()
        pauseGame = true
        setTimeout(resetGame, 3000)
    }

    // updateDisplay()

function resetGame() {
    numberOfGuesses = maxGuess
    pauseGame = false

    // Get a new word
    wordToMatch = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)].toUpperCase()
    console.log(wordToMatch)

    // Reset word arrays
    guessedLetters = []
    guessingWord = []

    // Reset the guessed word - double check this too
    for (var i=0, j=wordToMatch.length; i < j; i++) {
        // put a space instead of an underscore between multiword words
        if (wordToMatch[i] === " ") {
            guessingWord.push(" ")
        } else {
            guessingWord.push("_")
        }
    }

    // updateDisplay()
}

function updateDisplay () {
    document.getElementById("totalWins").innerText = wins
    document.getElementById("currentWord").innerText = guessingWord.join("")
    document.getElementById("remainingGuesses").innerText = numberOfGuesses
    document.getElementById("guessedLetters").innerText = guessedLetters.join(" ")
}
}}