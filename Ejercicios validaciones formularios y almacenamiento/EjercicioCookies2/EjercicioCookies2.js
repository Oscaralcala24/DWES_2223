
    const $FORM = document.getElementById("formularioMain");
    const $DNI = document.getElementById("dni");
    const $NOMBRE = document.getElementById("nombre");
    const $APELLIDOS = document.getElementById("apellidos");
    const $TELEFONO = document.getElementById("telefono");
    const $HORARIO = document.getElementById("horarios");
    const $COMENTARIOS = document.getElementById("comentarios");
    var contador = consultar();
    function handleSubmit(e){
        
        e.preventDefault();
        const form = $FORM.value;
        const dni = $DNI.value;
        const nombre = $NOMBRE.value;
        const apellidos = $APELLIDOS.value;
        const telefono = $TELEFONO.value;
        const horario = $HORARIO.value;
        const comentarios = $COMENTARIOS.value;
        var valido = true;
        var fallo = new Boolean(true)

        if(dni == false || isValidDNI(dni) == false){
            alert("Has introducido mal el DNI, el formato correcto es 55555555-X")
            valido = false
        }
        if(nombre == false || isValidNombre(nombre) == false){
            alert("Has introducido mal el nombre, introduce por lo menos un nombre o como máximo 2")
            valido = false
        } 
        if(apellidos == false || isValidApellidos(apellidos) == false){
            alert("Has introducido mal los apellidos, tienes que introducir como minimo 1 o como máximo 2")
            valido = false
        }
        if(telefono == false || isValidTelefono(telefono) == false){
            alert("Has introducido mal los telefono, tienes que introducir +99 999999999")
            valido = false
        }
        if(horario == false || isValidHorario(horario) == false){
            alert("Has introducido mal la hora, mira que no se pase de las 24 horas")
            valido = false
        }
        


        if(valido == true){
            var newUser = {dni : dni, nombre : nombre, apellidos : apellidos, telefono : telefono, horario : horario, comentarios : comentarios};
            console.log(newUser);
            var user = JSON.stringify(newUser);
            console.log(user);
            fallo = false
        }

        if (fallo == true){
            addCookie(++contador)
            document.getElementById("contador").innerHTML = contador
        }
        
    }

    function isValidHorario(horario){
            const validacion = /^(([0-1][0-9])|([2][0-4])):[0-5][0-9]$/;
            return validacion.test(horario);
        }

        function isValidTelefono(telefono){
            const validacion = /^\+[0-9]{2}\s[0-9]{9}$/;
            return validacion.test(telefono);
        }

        function isValidApellidos(apellidos){
            const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/;
            return validacion.test(apellidos);
        }

        function isValidNombre(nombre){
            const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/;
            return validacion.test(nombre);
        }

        function isValidDNI(dni){
            const validacion = /^\d{8}[A-Z]$/;
            return validacion.test(dni);
        }

        $FORM.addEventListener('submit', handleSubmit);
        
        
function addCookie(contador){
    let d = new Date ();
    document.cookie = "Fallo ="+contador+";"+"Expires"+ "=" +d
}

function resetearContador(){
    contador = 0
    document.getElementById("contador").innerHTML = ""

}


function consultar(){

    let cname = "Fallo"
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
    
    
    return nombreValor;
}