function calcular(){
    var abecedario=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    let texto = document.getElementById("textoIntroducido").value.toLowerCase()
    const arrayTexto = texto.split("");
    var numeroLetras = arrayTexto.length
    for (let i = 0; i < abecedario.length; i++) {
        var contador = 0
        for (let k = 0; k < arrayTexto.length; k++) {
            if(abecedario[i] == arrayTexto[k]){
                contador++
            }
        }
        let elemento = document.createElement("p")
        document.getElementById("resultado").appendChild(elemento).innerHTML = abecedario[i] + ': ' + ((contador/numeroLetras)*100) +' porciento' 
    }
}
