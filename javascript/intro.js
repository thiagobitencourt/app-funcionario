console.log('Bem vindo ao JavaScript!');
console.log('ISso também aparece no console!');

// 3 formas de criar variável

// Antiga - Por padrão, não use!
var nome;
nome = 'Fulano';
console.log('Bem-vindo: ' + nome);
// Nova - Use essa em vez de var
let sobrenome = 'de Tal';
// sobrenome = 'de Tal';
console.log(nome + ' ' + sobrenome);

// Valor constante, ao inicializar preciso já atribuir um valor
const profissao = 'Programador';
console.log(nome + ' trabalha como ' + profissao);
// var - antigo, por padrão não use (tem casos que vai ser necessário)
// let - substitui var, use esse
// const - Usado pra quando o valor não vai mudar. TENTE SEMPRE USAR ESSE