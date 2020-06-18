//Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.

var btnClick  = document.getElementById("click");
btnClick.addEventListener("click", function (){

    var para = document.getElementById("para");
    var num = Math.floor(Math.random() * 10) +1;

    if (num %2 == 0){
        var pd = "pari";
        para.classList.remove("pari");
    } else{
        var pd = "dispari";
        para.classList.remove("dispari");
    }

    console.log(num, pd)
});