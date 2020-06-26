//JSnack3
var quanti = parseInt(prompt("quanti numeri vuoi sommare?"))
var numeri = [];
var somma = 0;
var i = 0;

for(var i = 0; i < quanti; i++) {
   numeri [i] = parseInt(prompt ("inserisci un numero"));
   somma = somma + numeri[i];
}