window.onload = function () {

  // Variables
  const body = document.body;
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const sectionTitulo = document.createElement('section');
  const sectionFormulario = document.createElement('section');
  const form = document.createElement('form');
  const h1 = document.createElement('h1');
  const labelNombre = document.createElement('label');
  const labelEdad = document.createElement('label');
  const labelCiudad = document.createElement('label');
  const inputNombre = document.createElement('input');
  const inputEdad = document.createElement('input');
  const inputButton = document.createElement('input');
  const selectCiudad = document.createElement('select');
  
  const ciudades = [ 'Libertad', 'Parque San Martin', 'Merlo Centro', 'San Antonio de Padua', 'Ituzaingo', 'Moreno', 'Ciudadela' ];

  // seteo el texto visible
  h1.textContent = 'Formulario de Alta de Personas';
  labelNombre.textContent = 'Nombre y Apellido:';
  labelEdad.textContent = 'Edad:';
  labelCiudad.textContent = 'Ciudad:';

  // <section> del Titulo
  body.appendChild(sectionTitulo);
  sectionTitulo.appendChild(h1);

  // <section> del Formulario
  body.appendChild(sectionFormulario);
  sectionFormulario.appendChild(form);
  form.setAttribute('id', 'formulario');

  // ********** Ingreso del Nombre ********** 
  inputNombre.setAttribute('id', 'nombre');
  inputNombre.setAttribute('type', 'text');
  inputNombre.setAttribute('required', 'required');
  labelNombre.appendChild(inputNombre);
  form.appendChild(labelNombre);

  // ********** Ingreso de la Edad ********** 
  inputEdad.setAttribute('id', 'edad');
  inputEdad.setAttribute('type', 'number');
  inputEdad.setAttribute('required', 'required');
  inputEdad.setAttribute('min', '18');
  inputEdad.setAttribute('max', '110');
  labelEdad.appendChild(inputEdad);
  form.appendChild(labelEdad);
  
  // ********** Ingreso de las Ciudades ********** 

  // Creo unos contenedores para trabajar con los estilos
  form.appendChild(div1);
  form.appendChild(div2);
  form.appendChild(div3);

  // Genero un valor vacio para que quede limpia la lista
  optionSelect = document.createElement('option');
  optionSelect.setAttribute('value', '');
  selectCiudad.appendChild(optionSelect)

  // Creo el listado en base a un arreglo
  ciudades.forEach(function(ciudad) {
    optionSelect = document.createElement('option');
    optionSelect.textContent = ciudad;
    optionSelect.setAttribute('value', ciudad);
    selectCiudad.appendChild(optionSelect)
  });

  // Seteo propiedades del Select
  selectCiudad.setAttribute('id', 'ciudades');
  selectCiudad.setAttribute('title', 'ciudades');
  selectCiudad.setAttribute('class', 'chosen-select')
  selectCiudad.setAttribute('multiple', 'multiple');
  selectCiudad.setAttribute('required', 'required');

  // Levanto los contenedores con su respectivo contenido
  div1.setAttribute('class', 'container')
  div1.appendChild(div2);
  div1.appendChild(div3);

  div2.setAttribute('class', 'label-container')
  div2.appendChild(labelCiudad);

  div3.setAttribute('class', 'chosen-container');
  div3.appendChild(selectCiudad);
  
  // ********** Boton **********  
  inputButton.textContent = 'Enviar';
  inputButton.setAttribute('class', 'submit-button');
  inputButton.setAttribute('value', 'Enviar');
  inputButton.setAttribute('type', 'submit');
  div1.appendChild(inputButton);

  // Capturo los datos del formulario y permite el despliegue del listado
  $(document).ready(function() {
    $('.chosen-select').chosen();

    $('#formulario').submit(function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente

      // Obtener los valores de los elementos
      var nombre = $('#nombre').val();
      var edad = $('#edad').val();
      var ciudadesUsuario = $('#ciudades').val();
      var contador = 0;

      // Valido que el nombre sea correcto
      if (validarString(nombre, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        this.reset();
        $('#ciudades').val('').trigger('chosen:updated');
        mensajePantalla('Por favor ingrese un nombre valido');
        return false;
      }

      // Valido el ingreso de la edad
      if (validarString(edad, /^[0-9]+$/)) {
        if (edad < 18 || edad > 110) {
          this.reset();
          $('#ciudades').val('').trigger('chosen:updated');
          mensajePantalla('La edad no puede ser menos de 18 o mayor a 110');
          return false;
        }    
      } else {
        this.reset();
        $('#ciudades').val('').trigger('chosen:updated');
        mensajePantalla('El dato de Edad es incorrecto');
        return false;
      }

      // Valido que se seleccione una ciudad al menos y no se agreguen otras
      if (validarDuplicado(ciudades, '')) {
        this.reset();
        $('#ciudades').val('').trigger('chosen:updated');
        mensajePantalla('Por favor seleccione al menos una ciudad');
        return false;
      } else {
        // Recorro el listado original verificando que los datos ingresados sean iguales
        ciudadesUsuario.forEach(function(ciudad) {
          if (!ciudades.includes(ciudad)) contador++;
        });

        // De lo contrario te bocho
        if (contador > 0) {
          this.reset();
          $('#ciudades').val('').trigger('chosen:updated');
          mensajePantalla('Por favor seleccione solo ciudades pre-cargadas');
          return false;
        }
      }

      // Si todo esta bien, le aviso al Usuario
      this.reset();
      $('#ciudades').val('').trigger('chosen:updated');
      mensajePantalla('Datos guardados exitosamente');
      return false;
    });
  });

}