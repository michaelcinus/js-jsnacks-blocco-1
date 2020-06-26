//JSnack2 L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = prompt ("inserisci una parola");
var parola2 = prompt ("inserisci una parola");

if (parola1.length > parola2.length) {
    console.log(parola1);
    console.log(parola2);

} else if (parola2.length > parola1.length) {
    console.log(parola2);
    console.log(parola1);

} else {
    console.log("le parole sono della stessa lunghezza");
}