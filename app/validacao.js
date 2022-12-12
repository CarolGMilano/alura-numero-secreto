function verificaSeOChuteEValido (chute) {
    const numero = +chute;

    if (chute == "game over") {
        document.body.innerHTML = `
        <h2>Mais já? :(</h2> 
        <h3>O número era ${numSecreto}! Não desista! Aposto que você consegue acertar o próximo. Quer tentar?</h3>

        <button data-reiniciar class="btn-restart">Jogar novamente</button>
        `
    }

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Oops! Isso não é um número. Tente novamente.</div>`
        return
    } 
    
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Oops! O valor precisa estar entre ${menorValor} e ${maiorValor}.</div>`
        return
    } 
    
    if (numero === numSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns!</h2> 
        <h3>O número secreto era mesmo ${numSecreto}!</h3>

        <button data-reiniciar class="btn-restart">Jogar novamente</button>
        `
    } else if (numero > numSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.hasAttribute("data-reiniciar")) {
        window.location.reload();
    }
})
