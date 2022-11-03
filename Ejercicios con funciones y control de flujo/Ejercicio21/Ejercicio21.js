let n = Number(prompt('Introduce numero n'))
var array = {}
var contador= 0
iterar(n)
function iterar(n){
    debugger
    if(n>0){
        array[contador] = n
        contador++
        return iterar(n-1)
    }
}
console.log(array)
