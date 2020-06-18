//L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.

var btnClick = document.getElementById("click");

btnClick.addEventListener("click", function (){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    
    console.log(name + " " + surname)

});