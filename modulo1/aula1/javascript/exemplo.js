let nome = "mauricio";
// console.log(nome);
// console.log(typeof nome);

// if (!nome) {
//     console.log("Não foi atribuito um nome a variavel");
// } else {
//     console.log(nome);
// }

let resultado = (!nome) ? "Não foi atribuito um nome a variavel" : nome;
console.log(resultado);

function somar(a, b){
    return a + b;
}

let nota1 = 10;
let nota2 = 5;
console.log(somar(nota1, nota2));

const pessoa = {
    nome: "mauricio",
    idade: 35
}

let linguagens = ["c", "html/css"];
console.log(linguagens);
linguagens.push("javascript");
console.log(linguagens);
console.log(linguagens.pop());
console.log(linguagens.shift());

const produtos = [
    {nome: 'sapado', tipo: 'calcado', preco: 100},
    {nome: 'chinelo', tipo: 'calcado', preco: 20},
    {nome: 'camisa', tipo: 'vestuario', preco: 100},
    {nome: 'calca', tipo: 'vestuario', preco: 100},
];

let produtoCalca = produtos.find((prod) => prod.nome === 'calca');
console.log(produtoCalca);
