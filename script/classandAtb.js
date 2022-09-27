// const menu = document.querySelector('.menu');
// menu.classList.add('ativo');

// const animais = document.querySelector('.animais');

// console.log(animais.attributes[0]);

// const img = document.querySelector('img');

// const srcImg = img.getAttribute('alt');

// img.setAttribute('alt', 'É uma Raposa');

// console.log(srcImg);

//Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');

menu.forEach((item) => {
  item.classList.add('ativo');
});

//remove a classe ativo de todos os itens do menu e matenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove('ativo');
});

menu[0].classList.add('ativo');

//Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll('img');
img.forEach((img) => {
  const imgAlt = img.hasAttribute('alt');
  console.log(img, imgAlt);
});
//Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

console.log(link);
