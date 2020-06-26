//JSnack8
var numero = prompt("inserisci un numero di 4 cifre");
var n;
var ris = 0;

for(var i = 0; i < numero.length; i++) {
    n = parseInt(numero[i]);
    ris = ris + n;
}
console.log(ris);


