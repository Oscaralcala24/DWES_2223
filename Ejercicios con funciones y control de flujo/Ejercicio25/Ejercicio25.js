function hacerArray(){
    let texto = document.getElementById("textoIntroducido").value
    const myArray = texto.split(" ");
    alert(myArray.length)
    alert(myArray[0])
    alert(myArray[myArray.length-1])
}
