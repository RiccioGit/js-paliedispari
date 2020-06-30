/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


// RICHIESTE ALL'UTENTE

do {
  var userChoose = prompt("Fai la tua scelta: Pari o Dispari?");
} while (userChoose != "pari" && userChoose != "dispari");

var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log(userNumber);

// NUMERO CPU e SOMMA

var cpuNumber = getCpuNumber (1, 5);

function getCpuNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(cpuNumber);

var finalNumber = userNumber + cpuNumber;

console.log(finalNumber);

console.log(isEven(finalNumber)); // abbiamo inserito la funzione qua

// Dichiarare chi ha vinto

if (isEven(finalNumber) == true) {
  var temp = "pari"
} else {
  var temp = "dispari"
}

if (temp == userChoose) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}

// Con funzione e modulo capiamo se è pari o dispari

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
