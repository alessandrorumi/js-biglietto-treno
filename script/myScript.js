/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale avrà massimo due decimali
*/

// Es. 

// Età
const age = parseInt(prompt("Quanti anni hai?"));

// Nr. Km
const km = parseInt(prompt("Quanti km devi percorrere?"));

// Prezzo del biglietto (default)
let price = (0.21 * km);


// Tariffe agevolate
if (age < 18) {
  price = ((0.21 * km) * 0.8);

} else if (age > 65) {
  price = ((0.21 * km) * 0.6);

}

// console.log(price.toFixed(2));

document.getElementById("ticket_price").innerHTML = 
`Dato che hai ${age} anni e viaggerai con noi per ${km}km, il prezzo del tuo biglietto è di: ${price.toFixed(2)}€`