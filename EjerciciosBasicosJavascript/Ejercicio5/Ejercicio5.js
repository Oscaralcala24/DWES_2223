// Desarrollar un programa que pida el ingreso del precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador.
// Ingresar por teclado un precio con decimales y la cantidad sin decimales, es
// decir un entero


var precio = prompt('Ingresa precio del articulo ',precio)
var cantidad = prompt('Ingresa cantidad de articulos ',cantidad)
var precioTotal = parseFloat(precio) * parseInt(cantidad)
alert('La cantidad total a pagar es: ' + precioTotal)