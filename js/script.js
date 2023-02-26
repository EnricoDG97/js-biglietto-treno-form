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



// memorizzare età del passeggero inserita
let costumerAge = document.getElementById("SelectAge").selectedIndex;
// console.log(costumerAge)


// RECUPERATO SCHEMA REPO PRECEDENTE (DA MODIFICARE)

// // memorizzare prezzo biglietto 0.21€/km

let ticketPriceRounded = Math.round((ticketPrice + Number.EPSILON) * 100) / 100;

// // aggiunta variabili
let priceUnderAge;
let priceOverAge;

// selezione dei kilometri
let costumerKm = document.getElementById("kmElement");
let kmChoosen = costumerKm.value;
console.log("Inseriti kilometri da percorrere: " + kmChoosen);

// // PULSANTE
const button = document.getElementById('genNewTicket');
button.addEventListener("click", function() {

    let ticketPrice = (kmElement.value * kmPrice);
    let costumerAge = document.getElementById("SelectAge").selectedIndex;

    // IF cliente > 18 anni:
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

    let kmChoosen = costumerKm.value;

    document.getElementById("newTicket").style.display = "block";
    document.getElementById("genNickname").innerHTML = "Dati passeggero: " + costumerNickname;     
    document.getElementById("genKm").innerHTML = "Km del viaggio: " + kmChoosen;
    document.getElementById("genTicketPrice").innerHTML = "Prezzo del biglietto: <strong>€" + ticketPrice + "</strong>";
});

document.getElementById("closeTicket").addEventListener("click", function() {
  
    document.getElementById("newTicket").style.display = "none";
    costumerKm.value = "";
    costumerAge.value = "";
});