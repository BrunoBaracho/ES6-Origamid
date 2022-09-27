const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const raposah2 = document.querySelector('h2');

const h2left = raposah2.offsetLeft;

const rect = raposah2.getBoundingClientRect();

console.log(rect);

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  // console.log(soma);
}
window.onload = function () {
  somaImagens();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const link = document.querySelectorAll('a');

link.forEach((link) => {
  const linkHeight = link.offsetHeight;
  const linkWidth = link.offsetWidth;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log('Possui acessibilidade');
  } else {
    console.log('Não possui boa acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = window.matchMedia('(max-width: 720px)').matches;
if (menu) {
  const menuGet = document.querySelector('.menu');
  menuGet.classList.add('menu-mobile');
}
console.log(menuGet);
