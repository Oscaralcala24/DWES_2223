$FORM = document.getElementById("formulario");
$DNI = document.getElementById("DNI");
$NOMBRE = document.getElementById("nombre");
$NACIMIENTO = document.getElementById("nacimiento");  
$MAIL = document.getElementById("mail");  
$WEB = document.getElementById("web");  
$CONTRASENA = document.getElementById("contrasena");

function handleSubmit(e) {
    e.preventDefault();
    let dni = $DNI.value;
    let nombre = $NOMBRE.value;
    let mail = $MAIL.value;
    let web = $WEB.value;
    let nacimiento = $NACIMIENTO.value;
    let contrasena = $CONTRASENA.value;
    var valido = true;


    if(nombre == false || isValidNombre(nombre) == false){
        alert("Nombre incorrecto")
        valido = false
    }
    if(web == false || isValidWeb(web) == false){
        alert("Web incorrecta")
        valido = false
    }
    if(mail == false || isValidMail(mail) == false){
        alert("Email incorrecto")
        valido = false
    }
    if(dni == false || isValidDNI(dni) == false){
        alert("DNI incorrecto")
        valido = false
    }
    if(nacimiento == false || isValidNacimiento(nacimiento) == false){
        alert("Nacimiento incorrecto")
        valido = false 
    }
    if(contrasena == false || isValidContrasena(contrasena) == false){   
        alert("Contrasena incorrecta")
        valido = false
    }
    
    if(valido == true){
        var newUser = {dni:dni,nombre:nombre, mail: mail,web: web,nacimiento:nacimiento,contrasena:contrasena}
        console.log(newUser)
        var user = JSON.stringify(newUser);
        console.log(user);
    }
}
function isValidDNI(dni){
    const validacion = /^\d{8}[A-Z]$/igm;
    return validacion.test(dni);
}

function isValidNombre(nombre) {
    const validacion = /^[a-zA-Z]+\s[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;
    return validacion.test(nombre);
}
function isValidNacimiento(nacimiento){
    const validacion = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/
    return validacion.test(nacimiento);
}
function isValidMail(email) { 
    const validacion = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm;
        return validacion.test(email);
}
function isValidWeb(web){
    const validacion = /https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/igm;
    return validacion.test(web);
}
function isValidContrasena(contrasena){
    const validacion = /^\w{8,10}$/igm;
    return validacion.test(contrasena);
}


$FORM.addEventListener("submit", handleSubmit);
