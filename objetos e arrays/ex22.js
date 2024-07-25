//Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

function separarNome() {
  // Solicita o nome completo ao usuário
  const nomeCompleto = prompt("Digite seu nome completo:");

  // Divide o nome completo em um array de palavras, usando o espaço como separador
  const nomes = nomeCompleto.split(' ');

  // Extrai o primeiro e o último nome do array
  const primeiroNome = nomes[0];
  const ultimoNome = nomes[nomes.length - 1];

  // Imprime os nomes
  console.log("Primeiro nome:", primeiroNome);
  console.log("Último nome:", ultimoNome);
}

// Chama a função para executar o código
separarNome();
