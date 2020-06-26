//JSnack4 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var invitati = ["matteo", "luca", "simone", "piero", "antonio"];
var nome = prompt("inserisci il tuo nome");
var trovato = false;

nome = nome.toLowerCase();

for(var i = 0; i < invitati.length; i++) {
    if (invitati[i] == nome) {
        trovato = true;
    }
}

if (trovato = true) {
    console.log("sei presente nella lista, puoi entrare!");
} else {
    console.log("non sei stato invitato, vai via!");
    
}