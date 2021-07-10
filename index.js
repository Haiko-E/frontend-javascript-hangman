// importeer een tweetal functies en deze worden opgeslagen in de variabelen die tussen de {} staan

const { question } = require("readline-sync");
const {
  counter,
  displayWordSoFar,
  isGameWon,
  isGameLost,
} = require("./gamelogic");

// de functie wordt hier gedeclareerd maar nog niet uitgevoerd
function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  const letter = question("Raad een letter: ").toLowerCase();

  // Geeft een melding aan de gebruiker wanneer hij meer dan 1 letterinvoert
  if (letter.length > 1) {
    console.log("Je mag maar 1 letter invoeren, probeer het opnieuw");
    return game(word, guesses);
  }

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // laat het huidige woord en het galgje zien

  console.log(`\n\n Het galgje \n\n ${counter(word, guesses)}\n`);
  console.log(displayWordSoFar(word, guesses), "\n");

  // volgende ronde, wanneer Gamelost en Gamewon beide niet true zijn!, we roepen game nog een keer aan.
  if (isGameWon(word, guesses)) {
    console.log("je hebt GEWONNEN!!! het woord is = " + word.toUpperCase());
    return;
  }
  if (isGameLost(word, guesses)) {
    console.log("je hebt VERLOREN het woord was = " + word.toUpperCase());
    return;
  } else {
    game(word, guesses);
  }
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
