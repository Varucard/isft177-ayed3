window.onload = () => {

  const body = document.body;
  const h1 = document.getElementById('titulo');
  const div = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const inputButton = document.createElement('input');

  body.appendChild(div);

  form.setAttribute('name', 'formulario');
  form.setAttribute('method', 'POST');
  div.appendChild(form);

  label.textContent = 'Seleccione un color: ';
  input.setAttribute('type', 'color');
  form.appendChild(div1);
  div1.appendChild(label);
  div1.appendChild(input);

  form.appendChild(div2);
  inputButton.setAttribute('type', 'submit');
  inputButton.setAttribute('value', 'Enviar');
  div2.appendChild(inputButton);

  form.onsubmit = (event) => {
    event.preventDefault();
    h1.style.color = input.value;
  };

};