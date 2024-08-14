// exportação nomeada

import { soma, subtracao, multiplicacao, divisao, exponenciacao } from 
'./ex004.js';

const resultadoSoma = soma(10, 20);
const resultadoSubtracao = subtracao(20, 3);
const resultadoMultiplicacao = multiplicacao(3, 5);
const resultadoDivisao = divisao(34, 2);
const resultadoExponenciacao = exponenciacao(5, 2);

console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);
console.log(resultadoExponenciacao);
