function calcular(){
    let altura = Number(document.getElementById("altura").value)
    let sexo = document.getElementById("sexo")
    let sexoElegido = sexo.options[sexo.selectedIndex].text
    let edad = Number(document.getElementById("edad").value)
    var pesoIdealHombre = 50+((altura-150)/4)*3 + (edad-20)/4  
    var pesoIdealMujer = 50+((altura-150)/4)*0.9 + (edad-20)/4  
    if(sexoElegido == 'Hombre'){
        document.getElementById("resultado").innerHTML = 'El peso ideal es: ' + pesoIdealHombre
    }else{
        document.getElementById("resultado").innerHTML = 'El peso ideal es: ' + pesoIdealMujer

    }
}