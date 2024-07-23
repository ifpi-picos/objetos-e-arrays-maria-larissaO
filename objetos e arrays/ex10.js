/*Dado o array let animais = ['cachorro', 'gato', 'pássaro', 'peixe'], 
use o método slice() para criar um novo array contendo os elementos do índice 1 ao índice 3 (não inclusivo).
 Exiba o novo array.*/
 
 // 1. Definir o array de animais
let animais = ['cachorro', 'gato', 'pássaro', 'peixe'];

// 2. Usar slice() para obter os elementos do índice 1 ao 3 (não inclusivo)
const novoArray = animais.slice(1, 3);

// 3. Exibir o novo array
console.log("Novo array com elementos do índice 1 ao 3:");
console.log(novoArray);