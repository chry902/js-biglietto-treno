//chiedere all'utente il numero di chilometri da percorrere

const km_da_percorrere = prompt("km da percorrere");

// età passeggero
const eta_passeggero = prompt("età passeggero");

//sconti

const sconto_anziano = (km_da_percorrere * 0.13);
console.log(sconto_anziano);

const sconto_giovane = (km_da_percorrere * 0.17);
console.log(sconto_giovane);

const tariffa_ordinaria = (km_da_percorrere * 0.21)


// calcolo
if (eta_passeggero >= 65) {
    document.getElementById("sconto_anzino").innerHTML = "hai uno sconto del 40%"
} else if (eta_passeggero <= 17) {
    document.getElementById("sconto_giovane").innerHTML = "hai uno sconto del 20%"
} else










