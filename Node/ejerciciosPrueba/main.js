const funciones = require("./calculadora.js");
var suma = funciones.sumar(3,2);
var resta = funciones.restar(3,2);
var multiplicacion = funciones.multiplicar(3,2);
var division = funciones.dividir(3,2);
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);


const palabras = require("./palabras.js");

console.log(palabras.primeraPalabra(["hola","que","tal","estas"]));
console.log(palabras.ultimaPalabra(["hola","que","tal","estas"]));
console.log(palabras.longitud(["hola","que","tal","estas"]));