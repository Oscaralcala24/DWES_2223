var numPrimo = 0 

for (let i = 0; i <= 200; i++) {
    if(i % 5 == 0){
        console.log(i)
    }
    var contador = 0
    
    for (let k = 1; k <= i; k++) {
        
        if (i % k == 0 ){
            contador++
        }
        
    }
    if(contador == 2){
        numPrimo++
    }
}
let numeroNoPrimos = 200-numPrimo
console.log('Hay ' + numeroNoPrimos + ' numeros no primos')