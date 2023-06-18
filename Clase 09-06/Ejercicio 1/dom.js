window.onload = () => {

  const body = document.body;
  const div = document.createElement('div');
  const textArea = document.createElement('input');
  const button = document.createElement('button');

  body.appendChild(div);

  textArea.setAttribute('id', 'texto');
  textArea.setAttribute('type', 'text');
  div.appendChild(textArea);

  textArea.setAttribute('id', 'boton');
  button.setAttribute('style', 'margin-left: 5px');
  button.textContent = 'Enviar';
  div.appendChild(button);

  button.onclick = () => {
    alert(textArea.value);
  }

};