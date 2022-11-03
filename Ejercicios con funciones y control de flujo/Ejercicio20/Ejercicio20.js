function descuento(){
    let precio = Number(document.getElementById("precio").value)
    let marca = document.getElementById("marca").value.toLowerCase()
    let modelo = document.getElementById("modelo").value.toLowerCase()
    
    if(marca == 'renault'){
        document.getElementById("resultado").innerHTML = 'El precio con el descuento es de: ' + (precio - (precio*0,15))
    }else if(marca == 'ford'){
        if(modelo == 'fiesta'){
            document.getElementById("resultado").innerHTML = 'El precio con el descuento es de: ' + (precio - (precio*0.07))
        }else if(modelo == 'focus'){
            document.getElementById("resultado").innerHTML = 'El precio con el descuento es de: ' + (precio - (precio*0.10))

        }else{
            document.getElementById("resultado").innerHTML = 'El modelo es erroneo'
        }
    }else{
        document.getElementById("resultado").innerHTML = 'El precio con el descuento es de: ' + (precio - (precio*0,05))
    }
}