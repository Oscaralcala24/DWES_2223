var contadorComplemento = 0;
var contadorPlato = 0;
var precioPlato = 6+ (6*0.21);
var precioComplementoBasico = 1*(1*0.1);
var precioBebida = 1+(1*0.21);
var cuentaTotal = 0;
var descuento = false;;
if(confirm("¿Eres cliente VIP")){
    var descuento = new Boolean(true);
 }
 function anadirComplemento(){
    
    var complemento = prompt("¿Que complemento desea añadir? (entrante,bebida,postre)")
    if(complemento == "entrante" || complemento == "bebida" || complemento == "postre"){
        contadorComplemento++;
        if(complemento ==  "bebida"){
            cuentaTotal += precioBebida;
            alert("Su cuenta total asciende a : " + cuentaTotal)
        }else{
            cuentaTotal += precioComplementoBasico;
            alert("Su cuenta total asciende a : " + cuentaTotal)
            
        }
    }
}
function anadirPlato(){
    contadorPlato++;
    cuentaTotal += precioPlato;
    alert("Su cuenta total asciende a : " + cuentaTotal)
}

 function calcular(){
    if(descuento){
        document.getElementById("resultado").innerHTML = "El precio para " + contadorPlato + " platos y para " + contadorComplemento + " complementos, con IVA incluido es de " + cuentaTotal + "€"
        
    }else{
        document.getElementById("resultado").innerHTML = "El precio con descuento VIP para " + contadorPlato + " platos y para " + contadorComplemento + " complementos, con IVA incluido es de " + cuentaTotal + "€"
    }
 }