// Crear un input y un button, cuando le demos al botón, se añadirá el texto que
// hemos puesto en el input en un div vacío. Recuerda se añadirá el texto, no se
// machaca lo que haya en el div.

function add(){
    texto = document.getElementById("textoEscrito").value
    const elemento = document.createElement("p")
    document.getElementById("textoAnadido").appendChild(elemento)
    document.getElementById("textoAnadido").lastChild.innerHTML = texto
}

