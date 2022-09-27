const animais = document.getElementById('animais');
// console.log(animais.innerText);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNODE = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNODE);

primeiraUl.classList.add('grid-section');

const arrayGrid = Array.from(gridSectionHTML);

// Primeira Atividade

// Retorne no console todas as imagens do site
console.log(document.querySelectorAll('img'));
// Retorne no console apenas as imagens que começaram com a palavra imagem
console.log(document.querySelectorAll('img[src^="img/imagem"]'));
// Selecione todos os links internos (onde o href começa com #)
console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);

