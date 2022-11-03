function calcular(){
    let mes = Number(document.getElementById("mes").value)
    let ano = Number(document.getElementById("ano").value)
    let bisiesto
    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0 )){
        bisiesto = new Boolean(true)
    }else{
        bisiesto = new Boolean(false)
    }
    if(mes > 0 && mes < 13){
        if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        document.getElementById("resultado").innerHTML = 'Este mes tiene 31 dias'
        }else if(mes == 2){
            if(bisiesto == true){
                document.getElementById("resultado").innerHTML = 'Este mes tiene 29 dias'
            }else{
                document.getElementById("resultado").innerHTML = 'Este mes tiene 28 dias'
            }
        }else{
            document.getElementById("resultado").innerHTML = 'Este mes tiene 30 dias'
        }
    }else{
        document.getElementById("resultado").innerHTML = 'Mes fuera de limites'

    }
}