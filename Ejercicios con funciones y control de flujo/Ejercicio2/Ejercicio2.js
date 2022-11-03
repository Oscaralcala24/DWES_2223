function add(){
    texto = document.getElementById("textoEscrito").value
    const elemento = document.createElement("li")
    document.getElementById("lista").appendChild(elemento)
    
    
    if(texto != ''){
        document.getElementById("lista").lastChild.innerHTML = texto
    }
}
