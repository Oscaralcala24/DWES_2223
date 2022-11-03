function calcular(){

    var texto  = document.getElementById("textoIntroducido").value;
    var textoVuelta = "";

    //Separo las palabra de la frase y muestro la primera palabra y la ultima
    var palabrasSeparadas = texto.split(" ");
    var numeroPalabras = palabrasSeparadas.length;

    alert("La primera palabra es: " + palabrasSeparadas[0])
    alert("La ultima palabra es: " + palabrasSeparadas[numeroPalabras-1])

    //Quito todos los espacios de la frase
    var textoAux = texto.replaceAll(" ", "");
    var textoSinEspacios = textoAux;
    //Separo todas las letras de la frase
    textoAux = textoAux.split("")
    var contadorAtras = textoAux.length;
    //Recorro array con todas las letras de la frase de la ultima a la primera y las voy introduciendo en una variable
    for (let index = 0; index < textoAux.length; index++) {
        textoVuelta += textoAux[--contadorAtras]
        
    }
    //Si coincide en palíndroma
    if(textoSinEspacios === textoVuelta){
        alert("La palabra es palíndroma")
    }else{
        alert("La palabra no es palíndroma")
    }


    debugger
    var arrayOrdenado = new Array();


    console.log(arrayOrdenado)
}