
(function() {

  console.log('OBJETOS -----------------------------');
  let usuarioLogadoNoSistema = 'Joacyr Paraiba';
  
  let nome = 'Jesus';
  let sobrenome = 'Cristo';
  
  let nomeDaPropriedade = 'carro';
  
  let pessoa = {
    nome,
    sobrenome,
    idade: 33,
    cidade: 'Tubarão',
    [nomeDaPropriedade]: 'Mustang GT',
    marcaDoCarro: undefined,
    endereco: {
      rua: 'Av Brasil',
      numero: 15
    }
  };
  
  console.log('Valor da propriedade carro: ' + pessoa.carro);
  console.log('Valor da propriedade carro: ' + pessoa.nomeDaPropriedade);
  
  // console.log(`Nome da pessoa: ${pessoa.nome} ${pessoa.sobrenome}`);
  
  pessoa.nome = 'Ciclano';
  pessoa.sobrenome = 'de Jesus';
  
  // console.log(`Nome da pessoa: ${pessoa.nome} ${pessoa.sobrenome}. Idade: ${pessoa.idade}`);
  
  console.log('Mora na rua: ' + pessoa.endereco.rua);
  
  pessoa.endereco = {
    rua: 'Castelo branco'
  };
  
  
  let enderenoNovo = {
    rua: 'Castelinho encantado',
    numero: '10',
    complemento: 'Fundos'
  };
  
  pessoa.endereco = enderenoNovo;
  
  console.log('Nome da rua: ' + pessoa.endereco.rua);
  console.log(pessoa);
  
  
  let propriedadeQueEuQueroVerOValor = 'carro';
  console.log(pessoa[propriedadeQueEuQueroVerOValor]);
  
  console.log('LISTAS -----------------------------');
  
  let minhaVariavel = 'meu valor';
  
  
  let lista = [
    0,
    'texto',
    'dlksajdlksajdlksajkldsa',
    { nome: 'Fulano', sobrenome: 'Qualquer' },
    ['red', 'green', 'blue'],
    null,
    undefined,
    function() {},
    8,
    minhaVariavel,
    {},
    []
  ];
  
  console.log(lista);
  // console.log(lista[15].nome );

})();
