  
    
function jugar(){
    debugger
    var numeroAleatorio = parseInt(1 + Math.random()*50);
    alert(numeroAleatorio)
    var alerta = new Boolean(false)
    var contadorIntentos = 5;
    do{
    var numeroIntroducido = comprobarNumero(prompt("Introduce un numero del 1 al 50"),numeroAleatorio);
    contadorIntentos--;
    if( contadorIntentos == 0){
        alert("HAS PERDIDO, OTRA VEZ SERÁ!!!")
    }else{
        if(numeroIntroducido < numeroAleatorio){
            alert("El numero introducido es menor , te quedan " + contadorIntentos + " intentos")
        }else if(numeroIntroducido > numeroAleatorio){
            alert("El numero introducido es mayor, te quedan " + contadorIntentos + " intentos")
        }else{
            alert("HAS GANADO, ERES UN CRACK!!!")
            
        }
    }
    }while(contadorIntentos > 0 && numeroIntroducido != numeroAleatorio)
    if(confirm("¿Desea volver a jugar?")){
        jugar();
     }
}



function comprobarNumero(numeroIntroducido,numeroAleatorio){
    console.log(numeroIntroducido)
    if(numeroIntroducido <=50 && numeroIntroducido<0){
        return numeroIntroducido;
    }else{
         while(numeroAleatorio <= 0 || numeroIntroducido > 50){
            alert("Numero erroneo")
            numeroIntroducido = prompt("Introduce un numero del 1 al 50");
         }
         return numeroIntroducido;
    }
}





   
    