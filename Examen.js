
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";"); 
    for (let index = 0; index < ca.length; index++) { 
        let c = ca[index];
        while(c.charAt(0) == " "){
            c = c.substring(1); 
        }

        if (c.indexOf(name) == 0){ 
            return c.substring(cname.lenght+1,c.length)
        }
    }
    return ""; 
}


// Expresiones regulares 

