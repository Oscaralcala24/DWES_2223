
function recorrer(){
    document.getElementById("resultado").innerHTML = ""
    var frase = document.getElementById("cadena").value
    var numeroLetras = frase.length
    for (let index = 0; index < numeroLetras; index++) {
        let elemento = document.createElement('p')
        document.getElementById("resultado").appendChild(elemento).innerHTML = frase.charAt(index)
    }
}