function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        if (event.code == 'Enter' || event.code == 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(e) {
        tecla.classList.remove('ativa')
    }
}