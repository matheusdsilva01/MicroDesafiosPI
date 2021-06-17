let test = ["arroz", "feijão", "açucar", "carne"]
console.log ("Array utilizado = "+ test)

/* pop */
test.pop()
console.log("Pop: Retira o ultimo indice do array.")
console.log(test)

/* push */
test.push("maça")
console.log("Push: Adiciona informações dentro do array.")
console.log(test)

/* shift */
test.shift("arroz")
console.log("Shift: Retira um indice do array.")
console.log (test) 

/* unshift */
test.unshift(15)
console.log("Unshift: Adiciona um indice no inicio do array.")
console.log(test)

/* indexOf */
let testLast= test.lastIndexOf("maça")
console.log("IndexOf: Informa a posição e procura por uma informação dentro do array.")
console.log(testLast)

/* lastIndexOf */
let testIndex = test.indexOf("feijão")
console.log("LastIndexOf: Tambem informa a posição e procura uma informação dentro do array, so que de trás para frente.")
console.log(testIndex)

/* join */
let = testJoin = test.join(" / ")
console.log("Join: O método Join, separa os valores de um array com qualquer caractere.")
console.log(testJoin)