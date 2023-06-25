window.onload = function () {
  // Seleccionar la caja de texto
  const input = document.getElementById("nombre");
  // Seleccionar el boton
  const boton = document.querySelector("button");
  // Al hacer click en el boton, mostrar un saludo en un cuadro de mensaje
  boton.addEventListener("click", function () {
    const nombre = input.value;

    if (nombre !== "") {
      alert("Hola " + nombre);
      input.value = "";
    } else {
      alert("Por favor, ingrese su nombre");
    }
  });
};
