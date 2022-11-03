function calcular(){
    let baseImponible = Number(document.getElementById("baseImponible").value)
    let IVAaux = document.getElementById("IVA")
    var tipoIVA = IVAaux.options[IVAaux.selectedIndex].value
    var peso = Number(document.getElementById("peso").value)
    
    var IVA = calcularIVA(tipoIVA)
    var envio = calcularEnvio(peso)
    let precioFinal = (IVA*baseImponible ) + envio + baseImponible
    
    document.getElementById("resultado").innerHTML = 'Precio: ' + precioFinal
}

function calcularIVA(tipoIVA){
    debugger
    if(tipoIVA == "normal"){
        return  0.21
    }else{
        return  0.1
    }
}

function calcularEnvio(peso){
    
    if(peso < 1){
        return 3
    }else if(peso < 3){
        return 5
    }else{
        return 10
    }
}