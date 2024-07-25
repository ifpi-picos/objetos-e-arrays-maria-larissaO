//Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.

function exibirPrimeiroNome() {
  // Solicita o nome completo ao usuário
  const nomeCompleto = prompt("Digite seu nome completo:");

  // Divide o nome completo em um array de palavras, usando o espaço como separador
  const nomes = nomeCompleto.split(' ');

  // Extrai o primeiro nome (índice 0 do array)
  const primeiroNome = nomes[0];

  // Exibe o primeiro nome
  console.log("Seu primeiro nome é:", primeiroNome);
}

// Chama a função para executar o código
exibirPrimeiroNome();
