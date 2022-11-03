function calcular(){
    let diaNavidad = 25
    let mesNavidad = 12
    let diaIntroducido = Number(document.getElementById("dia").value)
    let mesIntroducido = Number(document.getElementById("mes").value)

    if(diaIntroducido > 0 && diaIntroducido <= 31 & mesIntroducido > 0 && mesIntroducido <= 12 ){
        if(diaNavidad==diaIntroducido && mesNavidad == mesIntroducido){
            document.getElementById("resultado").innerHTML = 'Es Navidad!'
        }else{
            document.getElementById("resultado").innerHTML = 'No es Navidad :('
        }
    }else{
        document.getElementById("resultado").innerHTML = 'Mes o dia incorrecto, fuera de limites'
    }
}