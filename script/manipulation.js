const menu = document.querySelector('.menu');

// console.log(menu.innerHTML);
// console.log(menu.innerText);
// console.log(menu.outerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.nextElementSibling);
console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// animais.appendChild(titulo);
contato.insertBefore(lista, titulo);

//Criando um novo h1 e usando ele
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Titulo';
novoH1.classList.add('titulo');

contato.appendChild(novoH1);
