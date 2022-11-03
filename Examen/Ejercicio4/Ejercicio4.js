
$FORM = document.getElementById("formulario")
$DNI = document.getElementById("dni")
$NOMBRE = document.getElementById("nombre")
$FECHA = document.getElementById("fecha")
$HORA = document.getElementById("hora")
$MOVIL = document.getElementById("movil")
$MOVILCHECK = document.getElementById("movilCheck")
$EMAIL = document.getElementById("email")
$EMAILCHECK = document.getElementById("emailCheck")

function handleSubmit(e) {
    e.preventDefault();
    let form = $FORM.value;
    let dni = $DNI.value;
    let nombre = $NOMBRE.value;
    let fecha = $FECHA.value;
    let hora = $HORA.value;
    let movil = $MOVIL.value;
    let email = $EMAIL.value;
    var valido = true;

    if (dni == false || isValidDni(dni) == false){
        alert("Has introducido mal el dni")
        valido = false;
    }
    if( nombre == false || isValidNombre(nombre) == false){
        alert("Has introducido mal el nombre")
        valido = false;
    }
    if( fecha == false || isValidFecha(fecha) == false){
        alert("Has introducido mal la fecha")
        valido = false;
    }
    if(hora == false || isValidHora(hora) == false){
        alert("Has introducido mal la hora")
        valido = false; 
    }
    
    if($MOVILCHECK.checked){
        if(movil == false || isValidMovil(movil) == false){
            alert("Has introducido mal el telefono movil")
            valido = false;
        }
    }
    if($EMAILCHECK.checked){
        if(email == false || isValidEmail(email) == false){  
            alert("Has introducido mal el email")
            valido = false;
        }
    }
    
    if(valido == true){
        var newCita = {dni:dni,nombre:nombre,fecha:fecha,hora: hora,movil: movil,email: email}
        console.log(newCita)
        var cita = JSON.stringify(newCita);
        console.log(cita);
        localStorage.setItem("dni",newCita.dni)
        localStorage.setItem("nombre",newCita.nombre)
        localStorage.setItem("fecha",newCita.fecha)
        localStorage.setItem("hora",newCita.hora)
        localStorage.setItem("movil",newCita.movil)
        localStorage.setItem("email",newCita.email)
    }
}
function isValidDni(dni){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
    'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',
    'T'];
    
    if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
    return false;
    } 
    
    if(dni.charAt(8) != letras[(dni.substring(0, 8))%23]) {
    return false;
    } 
}

function isValidNombre(nombre){
    const validacion =  /^[a-zA-Z]+\s[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;
    return validacion.test(nombre);
}

function isValidFecha(fecha){
    const validacion =  /^(([0][1-9])|([1-2][0-9])|([3][0-1]))\-[0-12]{2}\-\d{4}$/gm
    return validacion.test(fecha);
}
function isValidHora(hora){
    const validacion =  /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/gm
    return validacion.test(hora);
}
function isValidMovil(movil){ 
    const validacion = /^\+34\s\d{3}\s\d{3}\s\d{3}$/
}
function isValidEmail(email){
    const validacion = /^(.+\@.+\..+)$/
}

function rescatarDatos(){
    var dniIntroducido = prompt("Introduce tu dni para cargar tus datos")
    var dniDevuelto = localStorage.getItem("dni")
    if(dniDevuelto == dniIntroducido){
        $DNI.value= localStorage.getItem("dni")
        $NOMBRE.value = localStorage.getItem("nombre")
        $FECHA.value = localStorage.getItem("fecha")
        $HORA.value = localStorage.getItem("hora")
        $MOVIL.value = localStorage.getItem("movil")
        $EMAIL.value = localStorage.getItem("email")
    }
}


$FORM.addEventListener('submit', handleSubmit)