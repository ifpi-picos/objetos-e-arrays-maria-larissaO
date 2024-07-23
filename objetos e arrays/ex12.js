/*Dado o array let numeros = [50, 10, 1, 30, 20, 2], 
use o método sort() para ordenar os elementos em ordem crescente. Exiba o array resultante.*/
// 1. Definir o array de números
let numeros = [50, 10, 1, 30, 20, 2];

// 2. Ordenar os elementos em ordem crescente
numeros.sort((a, b) => a - b);

// 3. Exibir o array resultante
console.log("Array ordenado em ordem crescente:");
console.log(numeros);