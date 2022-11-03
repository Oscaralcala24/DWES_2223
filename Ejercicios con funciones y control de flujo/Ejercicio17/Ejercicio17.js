function calcular(){
    var nombre = document.getElementById("nombre").value
    var preguntasRealizadas = Number(document.getElementById("preguntasRealizadas").value)
    var respuestasCorrectas = Number(document.getElementById("respuestasCorrectas").value)
    var porcentaje = (respuestasCorrectas/preguntasRealizadas)*100
    if(porcentaje>=90){
        document.getElementById("resultado").innerHTML = nombre + ' tiene nivel superior'
    }else if(porcentaje>=75){
        document.getElementById("resultado").innerHTML = nombre + ' tiene nivel medio'
    
    }else if(porcentaje>=50){
        document.getElementById("resultado").innerHTML = nombre + ' tiene nivel bajo'
    }else{
        document.getElementById("resultado").innerHTML = nombre + ' esta fuera de nivel'

    }
}