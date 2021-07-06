// Resoluções comentadas, desculpe o número de comentários de comentários <3

// part.01
/* var numbers = [2,4,6,8,10,12,14,16,18,20]
var impares = numbers.map(function(){
    return [1,3,5,7,9]
});

console.log(impares) */


// part.02
/* var nomes =["Bruno","Maria","Pedro","Gabriel","Maria"]
var filtro = nomes.filter(function(){
    return nomes = "Maria"
})
console.log (filtro) */


// part.03
var algorismos= [1,5,9,3,7]
var resultado = algorismos.reduce(
    function(acumulador,numero){
        return acumulador +'-'+numero
    }
)
console.log(resultado)


// part.04
/* /var animais=["Cachorro","Gato","Papagaio","Cavalo"]
var newNome= animais.forEach(
    function (animais){
        console.log("O animal é " + animais)
    }
) */