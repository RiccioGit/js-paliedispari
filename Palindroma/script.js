/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Prompt per chiedere la parola all'utente

var word = prompt("Scrivi una parola!");

console.log("La tua parola è: " + word);

var palindrome = "";

for (var i = word.length - 1; i >= 0; i--) {
  palindrome +=word[i];
}

if (palindrome == word) {
  console.log("La tua parola è palindroma");
} else {
  console.log("Eh no, questa NON è palindroma");
}


// *_*_*_*_ PROCEDIMENTO IN CASO DI FUNZIONI (correzione in classe): _*_*_*_*

function reverseFun(word) {

  var reversed = "";

  for (var i = word.length - 1; i >= 0; i--) {
    palindrome +=word[i];
  }

  return reversed;
}

// poi anzichè il procedimento scritto sopra devi richiamare la funzione in questo modo:

var reverseWord = reverseFun(word);

// creiamo un altra funzione

function isPalindrome(word) {
  if (reverseWord == word) {
    return true;
  } else {
    return false;
  }
}

if (isPalindrome(word) == true) {
  console.log("Palindroma");
} else {
  console.log("NON palindroma");
}
