// const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

// titulosArray.forEach(function (item, index, array) {
// console.log(item, index, array);
// });

// let i = 0;
// imgs.forEach(() => console.log(i++));
// imgs.forEach(function () {
//   console.log(i++);
// });

//Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => console.log(item));

//Mostre os textos dos parágrafos no console
paragrafos.forEach((index) => console.log(index.innerText));

//Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => console.log(item, index));

let i = 0;
imgs.forEach(() => console.log(i++));

imgs.forEach(() => i++);
