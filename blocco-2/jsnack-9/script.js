//JSnack9 Calcola la somma e la media di 10 numeri chiesti all'utente.
var somma = 0;
var media;

for(var i = 0; i < 10; i++) {
    var numero = parseInt(prompt("inserisci un numero"));
    somma = somma + numero;
}

media = somma / 10;
console.log(somma, media);


