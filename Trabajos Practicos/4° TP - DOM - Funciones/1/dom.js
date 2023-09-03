window.onload = function () {

  const body = document.body;
  const encabezado = document.getElementById("encabezado");
  const div = document.createElement('div');
  const form = document.createElement('form');
  const label = document.createElement("label");
  const input = document.createElement("input");
  const inputButton = document.createElement('input');

  body.appendChild(div);

  form.setAttribute('name', 'formulario');
  form.setAttribute('method', 'POST');

  div.appendChild(form);

  label.textContent = 'Digite el mensaje que desea visualizar: ';

  form.appendChild(label);

  input.setAttribute('type', 'text');
  form.appendChild(input);

  inputButton.setAttribute('type', 'submit');
  inputButton.setAttribute('value', 'Enviar');

  form.appendChild(inputButton);

  form.onsubmit = (event) => {
    event.preventDefault();
    encabezado.textContent = input.value;
  };
}