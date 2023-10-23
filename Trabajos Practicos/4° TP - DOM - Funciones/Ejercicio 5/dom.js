window.onload = function () {

  const body = document.body;
  const listaNoOrdenada = document.getElementById("listaNoOrdenada");
  const div = document.createElement('div');
  const form = document.createElement('form');
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const posicionLabel = document.createElement("label");
  const posicionInput = document.createElement("input");
  const colorLabel = document.createElement("label");
  const colorInput = document.createElement("input");
  const inputButton = document.createElement('input');

  body.appendChild(div);

  form.setAttribute('name', 'formulario');
  form.setAttribute('method', 'POST');

  div.appendChild(form);

  posicionLabel.textContent = 'Digite la posicion del elemento que desea cambiar su color: ';
  colorLabel.textContent = 'Digite el color que desea visualizar: ';

  form.appendChild(posicionLabel);

  posicionInput.setAttribute('type', 'number');
  posicionInput.setAttribute('max', '4');
  form.appendChild(posicionInput);

  form.appendChild(br1);

  form.appendChild(colorLabel);

  colorInput.setAttribute('type', 'color');
  form.appendChild(colorInput);

  form.appendChild(br2);

  inputButton.setAttribute('type', 'submit');
  inputButton.setAttribute('value', 'Enviar');

  form.appendChild(inputButton);

  form.onsubmit = (event) => {
    event.preventDefault();
    const elementoAActualizar = listaNoOrdenada.getElementsByTagName("li")[parseInt(posicionInput.value)];
    elementoAActualizar.style.backgroundColor = colorInput.value;
  };
}