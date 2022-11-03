function guardar(){

    let cookie = document.getElementById("cookie").value;
    let valor = document.getElementById("valor").value;
    let d = new Date ();
    let exdays = document.getElementById("fecha").value;
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires =  d.toUTCString ();
    alert(expires)
    guardarCookie(cookie,valor,expires);
}
function guardarCookie(nombre,valor,fecha){

    document.cookie = nombre+"="+valor+";"+"Expires"+ "=" + fecha;
    var user1 = {nombre : nombre , valor : valor, expires : fecha}
    var aux = JSON.stringify(user1);
}
function consultar(){

    let cname = prompt("¿Que quieres consultar?")
    let cookieSeparator = document.cookie.split(";")
    let nombreValor = ""
    for (let index = 0; index < cookieSeparator.length; index++) {
        let separadorAUX = cookieSeparator[index].split("=")
        for (let index = 0; index < separadorAUX.length; index++) {
            if (separadorAUX[index].trim() === cname) {
                nombreValor = separadorAUX[index + 1]
                break;
            }
        }
    }
    
    alert(nombreValor)
    return nombreValor;
    var usu = JSON.parse(aux);
    return alert(usu[cname])
}

function borrar() {
    let nombre = prompt("¿Que cookie quieres borrar?")
    nombre = nombre.trim()
    guardarCookie(nombre,"","Thu, 01 Jan 1970 00:00:00 UTC")
}


