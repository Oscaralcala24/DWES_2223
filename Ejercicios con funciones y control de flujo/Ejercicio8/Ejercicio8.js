function calcular(){
    var nombre = document.getElementById("nombre").value
    var edad = Number(document.getElementById("edad").value)
    var diasVividos = edad*365
    if (edad>=18) {
        document.getElementById("resultado").innerHTML = 'Hola ' + nombre + ', eres mayor de edad y has vivido ' + diasVividos + ' dias'
    }else{
        document.getElementById("resultado").innerHTML = 'Hola ' + nombre + ', eres menor de edad y has vivido ' + diasVividos + ' dias'
    }
}