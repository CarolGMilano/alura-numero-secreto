const elementoChute = document.querySelector('[data-chute]')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
    chute = e.results[0][0].transcript;
    exibirChuteNaTela(chute);
    verificaSeOChuteEValido(chute);
}

function exibirChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());