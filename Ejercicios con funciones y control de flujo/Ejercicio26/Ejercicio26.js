function numerosRandom(){
    let numeros = (parseInt(1+Math.random()*101)) + "," + (parseInt(1+Math.random()*101)) + "," + (parseInt(1+Math.random()*101)) + "," + (parseInt(1+Math.random()*101)) + "," + (parseInt(1+Math.random()*101))
    document.getElementById("numerosIntroducidos").value = numeros
    
}

function calcular(){
    let texto = document.getElementById("numerosIntroducidos").value
    const myArray = texto.split(",");
    var numeroMayor = 0;
    var numeroMenor = myArray[0];
    let suma = 0;
    for (let i = 0; i < myArray.length; i++) {
        suma += Number(myArray[i]);
        if (myArray[i] > numeroMayor) {
            numeroMayor = myArray[i];
        }else if (myArray[i] < numeroMenor) {
            numeroMenor = myArray[i];
        }
    }
    let media = suma/myArray.length

    document.getElementById("resultado").innerHTML = "La suma es: " + suma + "<br/>La media es: " + media + "<br/>El mayor es: " + numeroMayor + "<br/>El menor es: " + numeroMenor  
}