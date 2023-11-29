// Suponiendo que el elemento seleccionado por el ID es una lista, a esta misma se le añadira un nuevo item con el dato de "Azafrán"
const ingredientes = document.getElementById("ingredientes");
const ingrediente = document.createElement("li");

ingrediente.innerText = "Azafrán";
ingredientes.appendChild(ingrediente);
