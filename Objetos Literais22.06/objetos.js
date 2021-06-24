// Exercício “Meu cardápio”


function restaurante(nome,cardapio){
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function() {
        return"Seja bem vindo a "+ nome + " escolha um de nossos pratos: "+ cardapio + " e boa sorte :D"
    }
}
let ponto = new restaurante("ifome", ["Arroz azedo", "Feijão requentado"])
console.log(ponto.entrada())