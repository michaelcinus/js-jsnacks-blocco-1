//Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari altrimenti toglie la classe dispari.

var btnClick  = document.getElementById("click");
btnClick.addEventListener("click", function (){

    var para = document.getElementById("para");
    var num = Math.floor(Math.random() * 10) +1;

    if (num %2 == 0){
        var pd = "pari";
        para.className = "pari";
    } else{
        var pd = "dispari";
        para.className = "dispari";
    }

    console.log(num, pd)
});