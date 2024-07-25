/*Crie um array de objetos representando pessoas com nome e idade, 
e use find para encontrar a primeira pessoa com idade maior que 18.*/
const pessoas = [
    { nome: 'João', idade: 17 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 15 },
    { nome: 'Ana', idade: 22 }
  ];
  
  const pessoaMaiorDe18 = pessoas.find(pessoa => pessoa.idade > 18);
  
  console.log(pessoaMaiorDe18);
  