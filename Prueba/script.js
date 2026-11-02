let contador=0;
const numero= document.getElementById("contador");
const disminuir= document.getElementById("disminuir");
const aumentar= document.getElementById("aumentar");
const reiniciar= document.getElementById("reiniciar");

aumentar.addEventListener("click", function name(params) {
    contador++;
    numero.textContent= contador;
})
disminuir.addEventListener("click", function name(params) {
    contador--;
    numero.textContent= contador;
})
reiniciar.addEventListener("click", function name(params) {
    contador=0;
    numero.textContent= contador;
})