const contadorElement = document.getElementById("contador");
const aumentarNumero = document.getElementById("aumentarNumero");
const diminuirNumero = document.getElementById("diminuirNumero");

let contadorValor = 0; 

function atualizarContador() {
    contadorElement.innerHTML = contadorValor;
}

aumentarNumero.addEventListener('click', function(){
    contadorValor++;
    atualizarContador();
});

diminuirNumero.addEventListener('click', function() {
    contadorValor--;
    atualizarContador();

});
