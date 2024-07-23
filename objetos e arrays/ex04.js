/*Crie um objeto produto com as propriedades nome, preço e quantidade. 
Em seguida, calcule e imprima o valor total do estoque (preço*quantidade).*/

const produto = {
    nome: "caderno",
    preco: 20,
    quantidade: 70,
    valorTotal: function() {
        return this.preco * this.quantidade;
    }
};
console.log(produto.valorTotal());