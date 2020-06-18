//Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi). Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.

var btnCalc  = document.getElementById("calc");

btnCalc.addEventListener("click", function (){

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var segno = document.getElementById("segno").value;
    var ris = document.getElementById("ris");

    if (segno == 1){
        ris.innerHTML = num1 + num2;
    }else if (segno == 2){
        ris.innerHTML = num1 - num2;
     } else if (segno == 3){
        ris.innerHTML = num1 * num2;
     } else {
        ris.innerHTML = num1 / num2;
      }
});