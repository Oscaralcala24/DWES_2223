var dineroInicial = 50

while(dineroInicial>0){
    let numeroElegido = Number(prompt("Introduce numero entre 1 y 6"))
    let apuesta = Number(prompt("Introduce apuesta"))
    let numeroRandom = 1+Math.random*7
    
        if(numeroElegido==numeroRandom){
            dineroInicial = dineroInicial+(apuesta*2)
            alert("Has acertado, tienes: " + dineroInicial)
        }else{
            dineroInicial = dineroInicial-apuesta
            alert("Has fallado, tienes: " + dineroInicial)
        }
}

