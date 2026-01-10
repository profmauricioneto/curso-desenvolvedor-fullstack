let btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', () => {
    let body = document.querySelector('body');
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark')
    } else {
        body.classList.replace('dark', 'light')
    }
});

let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', () => {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    let IMC = peso /(altura * altura);

    let resultado = document.querySelector('#resultado');
    let h2 = document.createElement('h2');
    h2.textContent = `IMC = ${IMC.toFixed(2)}`;

    resultado.appendChild(h2);
})