/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Prompt per chiedere la parola all'utente

var word = prompt("Scrivi una parola!");

console.log("La tua parola è: " + word);

var reverseWord = reverseFun(word);

console.log("Parola invertita: " + reverseWord);

//  Confrontare

if (word == reverseWord) {
  console.log("La tua parola è palindroma");
} else {
  console.log("Eh no, questa NON è palindroma");
}

// Funzione

function reverseFun(word) {

  var wordControl = "";

  for (var i = word.lenght-1; i >= 0; i--) {
    wordControl += word[i];
  }
  return wordControl;
}
