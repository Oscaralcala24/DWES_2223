var numero1 = prompt("Introduce numero 1")
var numero2 = prompt("Introduce numero 2")
var numero3 = prompt("Introduce numero 3")

if(Number(numero1)>Number(numero2) && Number(numero1)>Number(numero3)){
    alert('El ' + Number(numero1) + ' es el mayor')
}else if (Number(numero2)>Number(numero1) && Number(numero2)>Number(numero3)){
    alert('El ' + Number(numero2) + ' es el mayor')
}else{
    alert('El ' + Number(numero3) + ' es el mayor')
}