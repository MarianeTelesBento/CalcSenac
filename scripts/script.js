function Enviar(){
    const curso = document.getElementById("curso");
    const horas = document.getElementById("horas");
    var faltas = (horas.value/100*25)/4;

    document.getElementById("faltas").innerHTML = "Na atual UC do curso " + curso.value + ", você tem " + Math.floor(faltas) + " dias de faltas."
}
