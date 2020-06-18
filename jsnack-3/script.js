//Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background diventa verde, se negativo rosso e se zero blu.


var btnClick  = document.getElementById("click");

btnClick.addEventListener("click", function (){
    var num = parseInt(prompt("inserisci un numero"));

    if (num > 0){
      document.getElementById("para").className = "green"; 
    }else if (num < 0){
        document.getElementById("para").className = "red"; 
    } else {
        document.getElementById("para").className = "blue"; 
    }
});