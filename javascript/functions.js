console.log('FUNCIONS............................');

let usuarioPadrao = { nome: 'Usuário'};

function dizerOi(pessoa = usuarioPadrao, cidade = 'Tubarão') {
  console.log('Olá, seja bem-vindo ' + pessoa.nome + ' de ' + cidade);
}

let fulano = { nome: 'Fulano' };
// dizerOi(fulano, 'São Paulo');
// dizerOi({ nome: 'Getulio' });
// dizerOi();

function calcularIdade(pessoa) {
  let anoAtual = 2021;
  let idade = anoAtual - pessoa.anoNascimento;
  return idade;
}

const idadeDoFulano = calcularIdade({ nome: 'Fulano', anoNascimento: 2003 });
console.log('idade do fulano é: ' + idadeDoFulano);

// Objeto de primeira ordem
// Podemos tratar uma função como se fosse uma variável "qualquer"

const minhaFuncaoDeCalcularIdade = calcularIdade;
console.log( minhaFuncaoDeCalcularIdade({ anoNascimento: 2000 }) );

// Expressão de função imediatamente executada
// IIFE - 
(function() {
  console.log("Eu sou a função que não tem nome: Anônima");
})();

const minhaFuncao = function() {
  console.log('Eu sou outra funç~ao sem nome!');
}
// minhaFuncao();

const verificarSePodeEntrarNaFesta = function(pessoa, verificarIdade) {
  let idade = verificarIdade(pessoa);
  return idade >= 18;
}

const joacyr = { nome: 'Joacyr Paraiba', anoNascimento: 1950 };

// const podeEntrar = verificarSePodeEntrarNaFesta(joacyr, function() {
//   return 15;
// });

const podeEntrar = verificarSePodeEntrarNaFesta(joacyr, () => 15);

if (podeEntrar) {
  console.log('Bem-vindo a festa');
} else {
  console.log('Tente outra vez ano que vem!');
}

function obterMetodoValidacaoIdade(tipoFesta) {
  
  if (tipoFesta === 'livre') {
    return function() {
      return 18;
    }
  } else {
    return function(pessoa) {
      return 2021 - pessoa.anoNascimento;
    }
  }
}

const metodoObtemIdade = obterMetodoValidacaoIdade();
const idade = metodoObtemIdade(joacyr);
// console.log('Idade do Joacyr: ' + idade);

console.log('ARROW FUNCTIONS....................');

const verificarSeMaiorDeIdade = function(idade) {
  return idade >= 18;
}

// = > (sem o espaço)
// const verificarSeMaiorDeIdade = (idade) => {
//   return idade >= 18;
// }

// const verificarSeMaiorDeIdade = idade => {
//   // outras linhas
//   // Tantas quanto eu precisar
//   return idade >= 18;
// }

// function verificarSeMaiorDeIdade(idade) {
//   return idade >= 18;
// }


const verificarSeMaiorDeIdade = idade => idade >= 18;

// Arrow function no lugar de uma função anônima
// Todo lugar que eu uso uma função anonima eu posso usar um arrow funcion

/*
lista de parametros: ()
seguido do "arrow": => (= > sem o espaço)
corpo da função: { e }
returm: opcional (por padrão sempre retorna undefined)
*/


const maiorDeIdade = verificarSeMaiorDeIdade(15);
// function -> true

if (maiorDeIdade) {
  console.log('Você é maior de idade!!');
} else {
  console.log('Você ainda é de menor!');
}














