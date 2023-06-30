const botonCrear = document.querySelector("button");

botonCrear.onclick = function () {
  let hayQueCrearElInput = false;

  const input = document.createElement("input");
  // <input>
  const tipo = document.getElementById("tipocontrol").value;
  input.type = tipo;
  // <input type="...">
  const nombre = document.getElementById("nombre").value;

  if (nombre != "") {
    input.name = nombre;
    // <input type="..." name="...">

    const id = document.getElementById("id").value;
    const etiqueta = document.getElementById("etiqueta").value;

    hayQueCrearElInput = true;

    if (etiqueta != "") {
      if (id != "") {
        input.id = id;

        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = etiqueta;

        hayQueCrearElInput = true;

        document.body.appendChild(label);
      } else {
        alert("No se puede ingresar una etiqueta sin ID");
        hayQueCrearElInput = false;
      }
    } else if (id != "") {
      input.id = id;
      hayQueCrearElInput = true;
    }

    if (hayQueCrearElInput) {
      document.body.appendChild(input);
    }
  } else {
    alert("El nombre es obligatorio");
  }
};
