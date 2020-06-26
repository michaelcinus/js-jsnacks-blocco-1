//JSnack8 Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
var numero = prompt("inserisci un numero di 4 cifre");
var n;
var ris = 0;

for(var i = 0; i < numero.length; i++) {
    n = parseInt(numero[i]);
    ris = ris + n;
}
console.log(ris);


