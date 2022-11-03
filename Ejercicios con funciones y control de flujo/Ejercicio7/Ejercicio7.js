var numeroIntroducido = prompt('Introduce un numero entero')
var numero = Number(numeroIntroducido)
if(Number.isInteger(numero)){
    if(numero == 0){
        alert('Es 0')
    }else if(numero > 0){
        alert('Es positivo')
    }else {
        alert('Es negativo')
    }
}else{
    alert(numero + ' no es un numero entero')
}