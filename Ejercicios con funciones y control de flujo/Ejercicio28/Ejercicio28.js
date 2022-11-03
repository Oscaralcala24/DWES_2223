function calcular(){
    let dia = Number(document.getElementById("dia").value);
    let mes = Number(document.getElementById("mes").value);

    if((dia>=21&&mes==3)||(dia<=20&&mes==4))
        alert('Aries');
    if((dia>=24&&mes==9)||(dia<=23&&mes==10))
        alert('Libra');
    if((dia>=21&&mes==4)||(dia<=21&&mes==5))
        alert('Tauro');
    if((dia>=24&&mes==10)||(dia<=22&&mes==11))
        alert('Escorpio');
    if((dia>=22&&mes==5)||(dia<=21&&mes==6))
        alert('Geminis');
    if((dia>=23&&mes==11)||(dia<=21&&mes==12))
        alert('Sagitario');
    if((dia>=21&&mes==6)||(dia<=23&&mes==7))
        alert('Cancer');
    if((dia>=22&&mes==12)||(dia<=20&&mes==1))
        alert('Capricornio');
    if((dia>=24&&mes==7)||(dia<=23&&mes==8))
        alert('Leo');
    if((dia>=21&&mes==1)||(dia<=19&&mes==2))
        alert('Acuario');
    if((dia>=24&&mes==8)||(dia<=23&&mes==9))
        alert('Virgo');
    if((dia>=20&&mes==2)||(dia<=20&&mes==3))
        alert('Piscis');
}