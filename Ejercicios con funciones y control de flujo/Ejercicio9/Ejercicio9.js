function calcular(){
    var numeroIntroducido = parseInt(document.getElementById("numero").value)
    var contador = 0 
    var numAux = numeroIntroducido

    if(numeroIntroducido>=0){
        while(numAux>0){
            numAux /= 10
            numAux = parseInt(numAux)
            contador++
        }
        if (contador<=2){
            document.getElementById("resultado").innerHTML = 'El numero tiene ' + contador + ' cifra' 
        }else{
            document.getElementById("resultado").innerHTML = 'Error, el numero tiene mas de dos cifras'
        }
    }else{
        document.getElementById("resultado").innerHTML = 'Error, debe ser positivo'
    }
}