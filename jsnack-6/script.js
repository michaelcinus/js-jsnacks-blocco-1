//Nella pagina c'è un bottone#lanciaMoneta. Al click su un bottone, il programma genera un numero casuale (tra 0 e 9). Se il numero è pari mostra un img con la testa della moneta. Se è dispari mostra un'altra img con la croce della moneta.

var btnLancia  = document.getElementById("lancia");

btnLancia.addEventListener("click", function (){
    var num = Math.floor(Math.random() * 10);

if (num %2 == 0){
    var pd = "pari";
    var img1 = document.getElementById("img1");
    img1.classList.remove("noView");
} else{
    var pd = "dispari";
    var img2 = document.getElementById("img2");
    img2.classList.remove("noView");
}

 console.log(num, pd)

});