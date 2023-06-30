window.onload = function () {
  const ciudad = document.getElementById("ciudad");

  const boton = document.querySelector("button");

  boton.onclick = function () {
    const ciudadElegida = ciudad.options[ciudad.selectedIndex].innerText;
    alert("Ciudad establecida a " + ciudadElegida);
  };
};
