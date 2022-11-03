function aumento(){
    let sueldo = Number(document.getElementById("sueldo").value)
    let anosAntiguedad = Number(document.getElementById("anosAntiguedad").value)
    if (sueldo < 1000 && anosAntiguedad>=10){
        let sueldoNuevo = (sueldo*20/100) + sueldo
        document.getElementById("resultado").innerHTML = 'Aumento de sueldo, ahora es: ' + sueldoNuevo
    }else if (sueldo < 1000 && anosAntiguedad<10) {
        let sueldoNuevo = (sueldo*5/100) + sueldo
        document.getElementById("resultado").innerHTML = 'Aumento de sueldo, ahora es: ' + sueldoNuevo
    }else{
        sueldoNuevo = sueldo
        document.getElementById("resultado").innerHTML = 'El sueldo sigue siendo de: ' + sueldoNuevo
    }
}