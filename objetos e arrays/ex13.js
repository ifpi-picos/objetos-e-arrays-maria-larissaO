/*Escreva um programa que solicita ao usuário o nome de 5 filmes e armazene em um array.
 Em seguida, exiba no console os filmes informados.*/
 
// 1. Criar um array vazio para armazenar os filmes
const filmes = [];

// 2. Solicitar ao usuário os nomes dos filmes
for (let i = 0; i < 5; i++) {
    const nomeFilme = prompt("Digite o nome do filme ${i + 1}:");
    filmes.push(nomeFilme); 
}

// 3. Exibir os filmes no console
console.log("Filmes informados:");
for (const filme of filmes) {
    console.log(filme);
}