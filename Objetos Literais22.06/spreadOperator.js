// Exercício “Ver números”

let numerosPrimos = [2,3,5,7]
let numeros = [...numerosPrimos, 10,20,30,40,50]
console.log(numeros)

function maiorNumero(...coisas){
    console.log(Math.min(...coisas))
}
maiorNumero(20,25,54,18)