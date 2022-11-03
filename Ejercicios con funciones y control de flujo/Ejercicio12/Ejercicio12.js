function calcular(){
    let numero1 = document.getElementById("numero").value
    document.getElementById("resultado").innerHTML = numero1%2 == 0 ? 'Es par' : 'Es impar'
}