// DOEL: displayWordSoFar
// word = "javascript" guesses = [];
// -> "_ _ _ _ _ _ _ _ _ _ "
// word = "javascript" guesses = ["q", "w", "e", "a", "t"];
// -> "_ a _ a _ _ _ _ _ t "
// STRATEGIE:
// Een string aan elkaar plakken
// Door over elke letter in het woord heen te loopen
// Zit die letter er niet in: plak "_ " aan de string
// Zit die letter er wel in: plak "<letter> " aan de string
// - [ ] zet het eerste testje op test.only (later weer weghalen)
// - [ ] loggen: wat is word, wat is guesses
// - [x] javascript "splitten" word.split("") -> ['j','a','v','a','s','c','r','i','p','t']
// - [x] Maak een output variable (met let) met de waarde lege string
// - [x] een loop maken -> we loopen over ['j','a','v','a','s','c','r','i','p','t']
// - [x] voo elke van letters checken: zit de letter in guesses (guess.includes(letter))?
// - [x] if else
// - [x] zo nee: plak "_ " aan de output variable
// - [x] zo ja: plak "j " aan de output variable (niet j, maar de letter die we dan checken)
// - [x] klaar? -> onze ouutput string die we hebben gemaakt returnen
// - [x] Test geslaagd? haal test.only weg en zet het bij de volgende test erbij

function displayWordSoFar(word, guesses) {
  const arrayWord = word.split("");
  let emptyString = "";
  for (let i = 0; i < arrayWord.length; i++) {
    const element = arrayWord[i];
    if (guesses.includes(element)) {
      emptyString = emptyString + element + " ";
    } else {
      emptyString = emptyString + "_ ";
    }
  }
  return emptyString;
}

// console.log(displayWordSoFar("javascript", ["a", "s"]));

function isGameWon(word, guesses) {
  if (!displayWordSoFar(word, guesses).includes("_")) {
    return true;
  } else {
    return false;
  }
}

// console.log(isGameWon("javascript", ["j", "v", "s", "c", "r", "i", "p", "t"]));

function isGameLost(word, guesses) {
  let counter = 0;
  const arrayWord = word.split("");

  // loop trough the 'guesses' array. counter +1 if there is no match with the word.
  for (let i = 0; i < guesses.length; i++) {
    const element = guesses[i];
    if (!arrayWord.includes(element)) {
      counter++;
    }
  }

  // When counter is bigger or equel to 7 the Game is lost, else continue
  if (counter >= 7) {
    return true;
  }
  return false;
}

console.log(
  isGameLost("javascript", ["j", "s", "b", "2", "2", "2", "2", "2", "2"])
);

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
