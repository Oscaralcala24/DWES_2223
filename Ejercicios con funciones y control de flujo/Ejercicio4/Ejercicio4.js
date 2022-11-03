var numero1 = prompt('Introduce primer numero')
var numero2 = prompt('Introduce segundo numero')
const elemento = document.createElement("p")
const elemento2 = document.createElement("p")
if(Number(numero1)>Number(numero2)){
    let suma = 'El resultado de la suma es: ' + (Number(numero1)+Number(numero2))
    let diferencia = 'La diferencia entre numeros es: ' + (Number(numero1)-Number(numero2))
    document.getElementById("resultado").appendChild(elemento).innerHTML = suma
    document.getElementById("resultado").appendChild(elemento2).innerHTML = diferencia
}else{
    let multiplicacion = 'El resultado de la multiplicacion es: ' + (Number(numero1)*Number(numero2))
    let division = 'El resultado de la division es: ' + (Number(numero2)/Number(numero1))
    document.getElementById("resultado").appendChild(elemento).innerHTML = multiplicacion
    document.getElementById("resultado").appendChild(elemento2).innerHTML = division
}