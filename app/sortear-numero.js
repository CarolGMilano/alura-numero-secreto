const menorValor = 1;
const maiorValor = 100;
const numSecreto = gerarNumeroAleatorio ();

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor +1)
}

const elementoMenorValor = document.querySelector('[data-menorNum]');

elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('[data-maiorNum]');

elementoMaiorValor.innerHTML = maiorValor;