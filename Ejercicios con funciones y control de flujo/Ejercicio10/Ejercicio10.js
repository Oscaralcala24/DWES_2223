function calcular(){
    var numeroIntroducido = parseInt(document.getElementById("numero").value)
    var contador = 0 
    var numAux = numeroIntroducido

    while(numAux>0){
        numAux /= 10
        numAux = parseInt(numAux)
        contador++
    }

    if(contador<=3 && numeroIntroducido > 0){
         document.getElementById("resultado").innerHTML = 'El numero tiene ' + contador + ' cifra' 
    }else{
        document.getElementById("resultado").innerHTML = 'Error, numero incorrecto, es mayor de tres cifras , es negativo o 0'
    }
}