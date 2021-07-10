function displayWordSoFar(word, guesses) {
  let dashedWord = "";

  // forloop trough "word" to greate a dashed string
  for (let i = 0; i < word.length; i++) {
    let element = word[i];
    element = "_ ";
    dashedWord = dashedWord + element;
  }

  let elementGuesses = "";

  // forloop trough "guesses"
  for (let i = 0; i < guesses.length; i++) {
    const element = guesses[i];
    elementGuesses = elementGuesses + element;
  }

  console.log(dashedWord);
  console.log(elementGuesses);
}

displayWordSoFar("javascript", ["a", "s"]);

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
