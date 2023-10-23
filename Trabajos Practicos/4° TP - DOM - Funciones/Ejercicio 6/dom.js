window.onload = function () {

  const colores = ['red', 'green', 'cyan', 'fuchsia', 'gray', 'crimson'];

  const listaNoOrdenada = document.getElementById("listaNoOrdenada");

  const numeroAleatorio = (multiplicador) => { return Math.floor(Math.random() * multiplicador); }

  const elementoAActualizar = listaNoOrdenada.getElementsByTagName("li")[parseInt(numeroAleatorio(11))];
  elementoAActualizar.style.backgroundColor = colores[numeroAleatorio(7)];

}