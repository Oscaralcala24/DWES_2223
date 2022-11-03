
    const $FORM = document.getElementById("formulario")
    const $NOMBRE = document.getElementById("nombre")
    const $APELLIDOS = document.getElementById("apellidos")
    const $MAIL = document.getElementById("mail")
    const $WEB = document.getElementById("web")


    function handleSubmit(e){
        e.preventDefault();

        var nombre = $NOMBRE.value
        var apellidos = $APELLIDOS.value
        var formulario = $FORM.value
        var mail = $MAIL.value
        var web = $WEB.value;

        var valido = true;

        if(nombre == false || isValidNombre(nombre) == false){
            alert("Nombre incorrecto")
            valido = false
        }
        if(apellidos == false || isValidApellidos(apellidos) == false){
            alert("Apellidos incorrectos")
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

        if(valido == true){
            var newUser = {nombre:nombre,apellidos:apellidos, mail: mail,web: web}
            console.log(newUser)
            var user = JSON.stringify(newUser);
            console.log(user);
        }
    }

    

    function isValidNombre(nombre){
        const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/igm;
        return validacion.test(nombre);
    }

    function isValidApellidos(apellidos){
        const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/igm;
        return validacion.test(apellidos);
    }
    
    function isValidWeb(web){
        const validacion = /https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/igm;
        return validacion.test(web);
    }

    function isValidMail(mail){
        const validacion = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm;
        return validacion.test(mail);
    }



    $FORM.addEventListener("submit", handleSubmit);   
