console.log('Esse console está no arquivo .js');

// Comentário de uma linha
/*
Comentário de multiplas linhas
Igual ao Java
*/


// TIPOS DE DADOS - PRIMITIVOS

// string
// number
// boolean
// undefined
// null

// STRING ------------------------
const outroNome = 'Beltrano'; // string
const empresa = 'Trier Sistemas';

let aspasSimples = 'isso é uma "string"' // Use só uma das formas
const aspasDuplas = "isso tam bém é uma 'string'" // 
const stringTemplate = `Isso também é uma string`; // 2 diferençãs principais das outras formas

// multiplas linhas
const paragrafo = `Olá ${outroNome}, seja bem-vindo a ${empresa}.`;
// Olá Beltrano, seja bem vindo a Trier Sistemas.
console.log(paragrafo);

console.log('aspasSimples: ' + typeof aspasSimples); // string
console.log('aspasDuplas: ' + typeof aspasDuplas); // string
console.log('stringTemplate: ' + typeof stringTemplate); // string

// ---------------------------------------

// NUMBER ---------------------------------
aspasSimples = 10;
console.log(aspasSimples);
console.log('aspasSimples agora é do tipo: ' + typeof aspasSimples); // number

const numeroInteiro = 3215;
const numeroBigdecimal = 55.18;
console.log(numeroInteiro + ' -- ' + numeroBigdecimal);
console.log('numeroInteiro: ' + typeof numeroInteiro); // number
console.log('numeroBigdecimal: ' + typeof numeroBigdecimal); // number
// ----------------------------------------

// BOOLEAN ------------------------------------
const verdadeiro = true;
const naoVerdadeiro = false;
// Os dois valores possíveis para o tipo boolean são: true e false
console.log('verdadeiro: ' + typeof verdadeiro); // boolean
console.log('naoVerdadeiro: ' + typeof naoVerdadeiro); // boolean
// ---------------------------------------------

// UNDEFINED -----------------------------------------
let semValor; // undefined
console.log(semValor); // undefined
console.log('semValor: ' + typeof semValor); // undefined

semValor = 15;
console.log(semValor); // 15
console.log('semValor: ' + typeof semValor); // number

semValor = undefined;
console.log(semValor); // undefined
console.log('semValor: ' + typeof semValor); // undefined
// -----------------------------------------

// NULL -----------------------------------
let valorNulo; // undefined
valorNulo = null;
// undefined - Sem valor definido
// null - Explicitamente tem um valor nulo
console.log(valorNulo); // null
console.log('valorNulo: ' + typeof valorNulo); // object
// ------------------------------------------

// SYMBOL --------------------------------------
let umValorUnico = Symbol();
console.log(umValorUnico);
// --------------------------------------------
