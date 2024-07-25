/*Crie um array de objetos representando carros, cada um com propriedades
 nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.*/
 
const carros = [
    { nome: 'Fusca', ano: 1970 },
    { nome: 'Gol', ano: 1980 },
    { nome: 'Uno', ano: 1990 },
    { nome: 'Onix', ano: 2012 },
    { nome: 'HB20', ano: 2015 }
  ];
  
  const carrosModernos = carros.filter(carro => carro.ano > 2010);
  
  console.log(carrosModernos);
  