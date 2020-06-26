//JSnack3 Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
var quanti = parseInt(prompt("quanti numeri vuoi sommare?"))
var numeri = [];
var somma = 0;
var i = 0;

for(var i = 0; i < quanti; i++) {
   numeri [i] = parseInt(prompt ("inserisci un numero"));
   somma = somma + numeri[i];
}

/*while (i < quanti){
   numeri [i] = parseInt(prompt ("inserisci un numero"));
   somma = somma + numeri[i];
   i++;
} */

console.log(somma);