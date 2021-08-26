// console.log('MANIPULAção do dom ---------------');

// // DOM - Document Object Model
// // console.log(document.getElementsByTagName('p'));

// const linkGlobo = document.getElementById('link-4');

// linkGlobo.href = 'http://globo.com';
// linkGlobo.target = '_blank';
// linkGlobo.innerText = 'Globo.com';

// linkGlobo.innerHTML = `
//   <p>
//     <strong>Globo.com</strong>
//   </p>
//   <p>
//     <em>O maior portal de noticia do Brasil</em>
//   </p>
// `;

// linkGlobo.className = "link-globo";

// const paragrafos = document.getElementsByTagName('p');

// paragrafos[0].innerText = 'Teste de alteração de texto do primeiro paragrafo';
// paragrafos[0].setAttribute('id', 'paragrafo-1');
// paragrafos[0].setAttribute('style', 'color: blue; background-color: green;');


// // Encontra todos os elementos pelo valor do atributo class
// document.getElementsByClassName('link-interno');

// // Obtem elementos através de seletores CSS.
// // const linkInterno = document.querySelectorAll('a[href=""].link-interno#abc');

// // const linkInterno = document.querySelector('a[href=""].link-interno#123');

// // if (linkInterno) {
// //   linkInterno.innerText = "Inicio";
// //   linkInterno.setAttribute('style', 'font-size: 50px;');
// // }

// function adicionarNoticia(elementoBase, tituloNoticia, conteudo) {
//   const noticia = document.createElement('section');
//   noticia.innerHTML = `
//     <h3>${tituloNoticia}</h3>
//     <p>${conteudo}</p>
//   `;

//   elementoBase.appendChild(noticia);
// }

// // const elemento = document.getElementById('elemento-div');
// const divIdElemento = document.querySelector('#elemento-div');

// if (divIdElemento) {

//   const paragrafo = document.createElement('p');
//   paragrafo.innerText = 'Este é o texto do paragrafo';
//   paragrafo.style.color = 'red';

//   const noticia = document.createElement('section');
//   noticia.innerHTML = `
//     <h3>Titulo da noticia</h3>
//     <p> Conteúdo da noticia</p>
//   `;

//   divIdElemento.appendChild(noticia);
//   divIdElemento.appendChild(paragrafo);

//   const noticias = [
//     { titulo: 'Noticia 1', conteudo: 'Esta é a noticia 1' },
//     { titulo: 'Noticia 2', conteudo: 'Esta é a noticia 2' },
//     { titulo: 'Noticia 13', conteudo: 'Esta é a noticia 13' },
//   ];

//   for(let i = 0; i < noticias.length; i++) {
//     const noti = noticias[i];
//     adicionarNoticia(divIdElemento, noti.titulo, noti.conteudo);
//   }

// } else {
//   console.error('Elemento não encontrado!');
// }


// // document.getElementsByTagName('input');


// const inputNome = document.getElementById('nome');
// // console.log(inputNome);

// inputNome.addEventListener('change', event => {
//   console.log(event);
//   console.log(event.target); // referencia ao elemento
//   console.log('Valor: ' + event.target.value );
//   // Vai no backend pra ver se esse nome de usuário já existe
//   if (event.target.value === 'Fulano') {
//     alert('Esse nome de usuário já existe');
//   }
// });

// function idadeAlterada(event) {
//   const idade = event.target.value;
//   if (idade < 18) {
//     alert('É necessário ser maior de idade para fazer o cadastro no site');
//   }
// }

// const inputIdade = document.getElementById('idade');
// if (inputIdade) {

//   // inputIdade.onclick = () => alert('Clicou em idade');
//   inputIdade.onchange = idadeAlterada;
// }

// const formulario = document.querySelector('form[name="cadastroUsuario"]');
// console.log(formulario);

// function adicionaUsuario(usuario) {
//   const usuariosCadastrados = document.getElementById('usuarios-cadastrados');
//   const elementoUsuario = document.createElement('div');
//   elementoUsuario.innerHTML = `
//     <p>
//       <b>Nome: </b> ${usuario.nome}
//     </p>
//     <p>
//       <b>Sobrenome: </b> ${usuario.sobrenome}
//     </p>
//     <p>
//     <b>Idade: </b> ${usuario.idade}
//   </p>
//   `;

//   usuariosCadastrados.appendChild(elementoUsuario);
// }


// if (formulario) {

//   // formulario.onsubmit

//   formulario.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // console.log('Formulario: ', event.target.value);

//     adicionaUsuario(
//       {
//         nome: inputNome.value,
//         sobrenome: document.getElementById('sobrenome').value,
//         idade: inputIdade.value
//       }
//     );
    
//     const botaoLimpar = document.querySelector('button[type="reset"]');
//     botaoLimpar.click();
//   });
// }

function adicionaUsuario(nomeUsuario, sobrenomeUsuario, idadeUsuario) {
  const divUsuarioCadastrado = document.getElementById('usuarios-cadastrados');
  
  const divUsuario = document.createElement('div');
  divUsuario.innerText = `${nomeUsuario} - ${sobrenomeUsuario} - ${idadeUsuario}`;

  divUsuarioCadastrado.appendChild(divUsuario);
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  // Quando clicar em salvar vai executar essse código aqui: 
  // Preciso pegar o valor que o usuário digitou nos campos
  const nomeUsuario = document.getElementById('nome').value;
  const sobrenomeUsuario = document.getElementById('sobrenome').value;
  const idadeUsuario = document.getElementById('idade').value;

  adicionaUsuario(nomeUsuario, sobrenomeUsuario, idadeUsuario);
});









