/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/


/* 
-memorizzare numero kilometri inserito
-memorizzare età del passeggero inserita
-memorizzare prezzo biglietto 0.21€/km
-IF cliente < 18 anni:
    applocare sconto 20%
-ELSE IF cliente > 65 anni:
    applicare sconto 40%
-ELSE cliente >18 anni e <65 anni
    applicare prezzo pieno
-stampare prezzo finale con massimo due decimali.
*/

// memorizzare nome e cognome del passeggero
let costumerNickname = document.getElementById("costumerNameAndSurname").value;
console.log("Inserito nome passeggero: " + costumerNickname);

//prezzo standard biglietto
let kmPrice = 0.21;
let ticketPrice = (kmElement.value * kmPrice);
// test
console.log(`Prezzo standard: ${ticketPrice}`);


// memorizzare numero di kimometri inserito
let costumerKm = document.getElementById("kmElement");
let kmChoosen = costumerKm.value;
// test
console.log("Inseriti kilometri da percorrere: " + kmChoosen);
// memorizzare età del passeggero inserita
let costumerAge = document.getElementById("SelectAge").selectedIndex;
// console.log(costumerAge)


// RECUPERATO SCHEMA REPO PRECEDENTE (DA MODIFICARE)

// // memorizzare prezzo biglietto 0.21€/km

// let ticketPriceRounded = Math.round((ticketPrice + Number.EPSILON) * 100) / 100;

// // aggiunta variabili
let priceUnderAge;
let priceOverAge;

// -IF cliente < 18 anni:
if (costumerAge === 0) {
    priceUnderAge = Math.round(((ticketPrice - ((ticketPrice * 20) /100)) + Number.EPSILON) * 100) /100;
    console.log(`Prezzo finale per minorenne: ${priceUnderAge}`)
// -ELSE IF cliente > 65 anni:
} else if (costumerAge === 2) {
    priceOverAge = Math.round(((ticketPrice - ((ticketPrice * 40) /100)) + Number.EPSILON) * 100) /100;
    console.log(`Prezzo finale per adulto over65: ${priceOverAge}`)
// -ELSE cliente >18 anni e <65 anni
} else {
    console.log(`Prezzo finale per adulto: ${ticketPriceRounded}`) 
}



// // PULSANTE
// const button = document.querySelector('input');
// button.addEventListener("click");

// function click() {
