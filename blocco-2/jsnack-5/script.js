//JSnack5 Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
var numeriDisp = [];
var numero;
var i = 0;

while (i<6) {
    numero = parseInt(prompt ("inserisci un numero"));
    if (numero %2){
        numeriDisp.push(numero);
    }
    i++;

    console.log(numero);
}

console.log(numeriDisp);