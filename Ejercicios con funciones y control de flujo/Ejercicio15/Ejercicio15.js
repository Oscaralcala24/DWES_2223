function calcular(){
    switch (document.getElementById("diaSemana").value.toLowerCase()) {
        case 'lunes':
                document.getElementById("resultado").innerHTML = 'Mañana es Martes'
            break;
        case 'martes':
                document.getElementById("resultado").innerHTML = 'Mañana es Miercoles'
            break;
        case 'miercoles':
                document.getElementById("resultado").innerHTML = 'Mañana es Jueves'
            break;
        case 'jueves':
                document.getElementById("resultado").innerHTML = 'Mañana es Viernes'
            break;
        case 'viernes':
                document.getElementById("resultado").innerHTML = 'Mañana es Sabado'
            break;
        case 'sabado':
                document.getElementById("resultado").innerHTML = 'Mañana es Martes'
            break;
        case 'domingo':
                document.getElementById("resultado").innerHTML = 'Mañana es Lunes'
            break;
    
        default:
            document.getElementById("resultado").innerHTML = 'Error, no has introducido correctamente el dia de la semana'
            break;
    }
}