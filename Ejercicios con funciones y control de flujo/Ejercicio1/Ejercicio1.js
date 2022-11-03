function calcular(){
    let num1 = document.getElementById("variable1").value
    let num2 = document.getElementById("variable2").value
    num1 > num2 ? (alert('El numero mas grande es el ' + num1)) : (alert('El numero mas grande es el '+ num2))
}