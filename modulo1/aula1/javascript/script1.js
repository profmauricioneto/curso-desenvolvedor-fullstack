// window.alert('Hello from JS externo!');
// let cabecalho = document.getElementById('cabecalho');
// console.log(cabecalho);
// cabecalho.style.color = 'red';
let header = document.querySelector('[type=text]');
header.value = 'exemplo';

let divs = document.getElementsByTagName('div');
for(let i = 0; i < divs.length; i++) {
    divs[i].style.margin = '10px'
    divs[i].style.border = '1px solid black';
}

let contents = document.getElementsByClassName('content');
for(let i = 0; i < contents.length; i++) {
    contents[i].textContent = 'Modificando o texto dos conteúdos!'
}