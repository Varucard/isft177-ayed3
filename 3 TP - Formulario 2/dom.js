window.onload = () => {

  // Variables
  const listado = ['text', 'password', 'color', 'number', 'email'];

  const body = document.body;
  const div = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');

  formulario = document.getElementById('formulario')
  selector = document.getElementById('selector')
  nombre = document.getElementById('nombre')
  id = document.getElementById('id')
  etiqueta = document.getElementById('etiqueta')


  formulario.onsubmit = (event) => {
    event.preventDefault();
  
    if (selector.value === '' || (validarDuplicado(listado, selector.value) == false)) {
      mensajePantalla('Por favor ingrese un valor valido');
    } else if (nombre.value === '' || (validarString(nombre.value, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) || validarString(nombre.value, /^[0-9]+$/))) {
      mensajePantalla('Por favor ingrese un nombre valido');
    } else {

      if (etiqueta.value !== '') {
        if (id.value === '') {
          mensajePantalla('Al generar una Etiqueta debe ingresar un ID');
        } else {
          body.appendChild(div);
          div.setAttribute('class', 'div_form');

          div.appendChild(label);
          label.textContent = etiqueta.value;
          label.setAttribute('for', id.value);

          div.appendChild(input);
          input.setAttribute('class', 'espacio_input');
          input.setAttribute('type', selector.value);
          input.setAttribute('name', nombre.value);
          input.setAttribute('id', id.value);
        }
      } else if (id !== '') {
        body.appendChild(div);
        div.setAttribute('class', 'div_form');

        div.appendChild(input);
        input.setAttribute('class', 'espacio_input');
        input.setAttribute('type', selector.value);
        input.setAttribute('name', nombre.value);
        input.setAttribute('id', id.value);
      } else {
        body.appendChild(div);
        div.setAttribute('class', 'div_form');

        div.appendChild(input);
        input.setAttribute('class', 'espacio_input');
        input.setAttribute('type', selector.value);
        input.setAttribute('name', nombre.value);
      }
    }
  };

}