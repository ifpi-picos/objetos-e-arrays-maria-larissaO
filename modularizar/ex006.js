//Escreva um programa em JavaScript que utilize a biblioteca mathjs para calcular o logaritmo 
//de um número fornecido pelo usuário.
 
function calcularLogaritmo(base, numero) {
  return Math.log(numero) / Math.log(base);
}

const numero = Number(prompt('Digite o número para calcular o logaritmo: '));
const base = Number(prompt('Digite a base do logaritmo: '));

const resultado = calcularLogaritmo(base, numero);

console.log(`O logaritmo de ${numero} na base ${base} é ${resultado}`);
