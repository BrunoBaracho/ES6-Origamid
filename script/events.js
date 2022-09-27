const img = document.querySelector('img');

function callback(event) {
  // console.log(event);
}
img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

// animaisLista.addEventListener('click', callBackLista);

function callBackLista(event) {
  console.log(event.target);
  console.log(event.type);
}

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(this);
}

// linkExterno.addEventListener('click', handleLinkExterno);

const imgs = document.querySelectorAll('img');
function handleImg(event) {
  // console.log(event.target);
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"');

function handleAtivo(event) {
  event.preventDefault();
  linksInternos.forEach((item) => {
    item.classList.remove('Ativo');
  });
  event.currentTarget.classList.add('ativo');
  console.log(event.target);
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function handlAll(e) {
  e.currentTarget.remove();
}

allElements.forEach((target) => {
  target.addEventListener('click', handlAll);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleClickT);
