function tocaSomPom() {
    document.querySelector('audio#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i = 0; i < listaDeTeclas.length; i++) {
    listaDeTeclas[i].onclick = tocaSomPom
}