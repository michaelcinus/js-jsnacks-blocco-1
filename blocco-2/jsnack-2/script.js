//JSnack2
var parola1 = prompt ("inserisci una parola");
var parola2 = prompt ("inserisci una parola");

if (parola1.length > parola2.length) {
    console.log(parola1);
} else if (parola2.length > parola1.length) {
    console.log(parola2);
} else {
    console.log("le parole sono della stessa lunghezza");
}