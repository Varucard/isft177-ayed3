function saludar() {
  // Muestra un mensaje en un cuadro de dialogo (pop up)
  alert("Hola, como andas?");
}

function saludar2() {
  // Muesstra un cuadro de dialogo solicitando el ingreso de
  // un dato por teclado
  let nombre = prompt("Por favor, escriba su nombre");
  console.log(nombre + 1);
  alert("Bienvenido " + nombre);
}

function saludar3() {
  // Muestra un cuadro de dialogo donde el usuario puede
  // elegir dos opciones (si o no)
  let confirma = confirm("Esta seguro?");

  if (confirma) {
    alert("Si, estoy seguro");
  }

  console.log(confirma);
}

const boton = document.getElementById("botoncito");
boton.onclick = saludar2;
