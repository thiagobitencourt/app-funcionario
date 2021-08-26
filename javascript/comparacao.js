console.log('COMPARAÇÕES ------------------------------');

let resultado;
resultado = 2 == 2; // true
resultado = 'a' == 'a'; // true

resultado = '2' == 2; // true - Compara os valores e não o tipo
// resultado = 'a' == a; // Erro

resultado = 2 != 2; // false
resultado = 'a' != 'a'; // false
resultado = '2' != 2; // false

resultado = 2 === 2; // true
resultado = 'a' === 'a'; // true
resultado = '2' === 2; // false - Além de comprar os valores, compara também o tipo do dado
resultado = '2' !== 2; // true - Tem o mesmo "valor" mas os tipos são diferentes

resultado = '2' === '2'; // true - o tipo e o valor são iguais
resultado = '22' === '2'; // false - apesar do tipo ser o mesmo, o valor é diferente

resultado = '22' !== 22; // true - Tem o mesmo "valor" porém o tipo de dado é diferente

// TENTE SEMPRE USAR === (Isso te dá maior "garantia")
console.log(resultado);


// COERSÃO ou CONVERSÃO

console.log('resultado: ', 2 + 2); // 4
console.log('resultado: ', '2' + 2); // 22
console.log('resultado: ', 2 + '2'); // 4

console.log('resultado: ', 2 * '2'); // 4
console.log('resultado: ', 2 / '2'); // 1

console.log('verdadeiro ou falso: ', true); // true
console.log('verdadeiro ou falso: ', false); // false
console.log('verdadeiro ou falso: ', 'true' === true); // false - são tipos diferentes
console.log('verdadeiro ou falso: ', 'true' == true); // true - o "texto" foi "convertido" para boolean
console.log('verdadeiro ou falso -->> : ', 'false' == true); // false - o "texto" foi "convertido" para boolean
console.log('verdadeiro ou falso -->> : ', 'false' === true); // true - o "texto" foi "convertido" para boolean
// == o javascript vai fazer a conversão de tipos, mas com === eu to dizendo pra comparar sem converter o tipo


console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true

console.log(!'false'); // false
console.log(!!'true'); // true

console.log(!'dasdsa'); // false
console.log(!!'teste'); // true

console.log(!''); // true

// 0 -> false
// 1 -> true
// 2 -> true
// ... -> 

// '' -> false
// 'dasda' -> true

//     !         1             -> false
//     !         0             -> true

// !!'texto'    -> true
let texto = null; // undefined

// null -> false
// undefined -> false

if (texto) {
  // quando tiver texto
} else {
  // cai no esla quando não tiver texto
}

let valor = '0';
let bool = !!valor; // true
let lista = !![]; // true



let marcaDoCarro;
let meuCarro = 'Mustang GT';

if (meuCarro === 'Mustang GT') {
  marcaDoCarro = 'Ford';
} else {
  marcaDoCarro = 'Indefinida';
}

marcaDoCarro = meuCarro === 'Mustang GT' ? 'Ford' : 'Indefinida';
