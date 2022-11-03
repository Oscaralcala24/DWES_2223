function calcular(){
    var a = Number(document.getElementById("numero1").value)
    var b = Number(document.getElementById("numero2").value)
    var c = Number(document.getElementById("numero3").value)

    if(a == b && a == c){
        document.getElementById("resultado").innerHTML = 'El resultado es = ' + ((a+b) * c)
    }else{
        document.getElementById("resultado").innerHTML = 'Los numeros son distintos'

    }
}