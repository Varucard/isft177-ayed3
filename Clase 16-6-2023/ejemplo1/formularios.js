window.onload = function () {
  // Seleccionar por ID el encabezado que el documento posee
  const h1 = document.getElementById("titulo");

  // Cambiar el texto del h1 por "Bienvenidos al terciario"
  h1.textContent = "Bienvenidos al terciario - textContent";
  h1.innerText = "Bienvenidos al terciario - innerText";
  h1.innerText =
    "Bienvenidos al terciario - <script>console.log('hola');</script>";

  // Modificar el valor del atributo ID del h1
  h1.setAttribute("id", "titular");
  // Agregar la clase encabezado al h1
  h1.setAttribute("class", "encabezado");

  // Seleccionar el parrafo que el documento contiene y eliminarlo
  const p = document.querySelector("p");
  p.remove();
};
