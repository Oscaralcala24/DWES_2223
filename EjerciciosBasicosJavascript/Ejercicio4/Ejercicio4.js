// Realizar un programa que lea cuatro valores numéricos decimales e informar la
// suma y producto de los cuatro y resta de los dos primeros y división de los dos
// últimos.


var variable1 = prompt()
var variable2 = prompt()
var variable3 = prompt()
var variable4 = prompt()
var resultado1 = parseFloat(variable1)+parseFloat(variable2)+parseFloat(variable3)+parseFloat(variable4)
var resultado2 = parseFloat(variable1)*parseFloat(variable2)+parseFloat(variable3)*parseFloat(variable4)
var resultado3 = parseFloat(variable1)-parseFloat(variable2)
var resultado4 = parseFloat(variable3)/parseFloat(variable4)

alert('La suma de todas las variables es: '+ resultado1)
alert('El producto de todas las variables es: '+ resultado2)
alert('La resta de ' + variable1 + ' menos ' + variable2 + ' es: '+ resultado3)
alert('La division de ' + variable3 + ' entre ' + variable4 + ' es: '+ resultado4)