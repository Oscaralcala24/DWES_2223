function calcular(){
    var nota1 = Number(document.getElementById("nota1").value)
    var nota2 = Number(document.getElementById("nota2").value)
    var nota3 = Number(document.getElementById("nota3").value)
    var media = ((nota1+nota2+nota3) / 3);
    (media<5) ? document.getElementById("resultado").innerHTML = 'Repetidor' :
    (media>= 5 && media < 7) ? document.getElementById("resultado").innerHTML = 'Superado':
    document.getElementById("resultado").innerHTML = 'Promocionado';
}