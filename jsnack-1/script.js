//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var num1 = parseInt(prompt ("inserisci il primo numero"));
var num2 = parseInt(prompt ("inserisci il secondo numero"));

if (num1 > num2){
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else {
    console.log("uguali");
}