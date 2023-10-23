const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const situacion = ['APROBADO', 'DESAPROBADO'];
let alumnos = [];
let notas = [];

// Utilizo esta función para componer lo que el usuario vera una vez cargado todos los datos
function mostraConsola(alumnos, notas) {
  let promedio = 0;
  let mensajes = [];

  // Recorro los alumnos que tengo cargados
  for (let i = 0; i < alumnos.length; i++) {

    // Obtengo su promedio y en base a eso decido si estan APROBADOS O DESAPROBADOS, seguido construyo su mensaje
    notas[i].forEach(nota => {
      promedio += nota;
    });

    promedio = promedio / notas[i].length;

    if (promedio < 7) mensajes[i] = `El Alumno: ${alumnos[i]} se encuentra ${situacion[1]} con un promedio de: ${promedio.toFixed(2)}`
    else mensajes[i] = `El Alumno: ${alumnos[i]} se encuentra ${situacion[0]} con un promedio de: ${promedio.toFixed(2)}`
  }

  return mensajes;
}

// Utilizo esta función para cuando tengo a los nombres de los alumnos puedo indicar al usuario a quien le esta cargando las notas
function ingresarNotas(indice) {
  // Inicio el sistema indicando que arranque con el Usuario 0 cargado
  if (indice < alumnos.length) {
    // Solicito al Usuario que me ingrese las notas del Alumno que le voy marcando
    r.question(`Ingrese las 3 notas para el alumno ${alumnos[indice]}: `, (ingreso) => {
      const notasAlumno = ingreso.split(" ").map(parseFloat);
      notas.push(notasAlumno);
      ingresarNotas(indice + 1); // Pasar al siguiente alumno
    });
  } else {
    // Una vez todas las notas han sido ingresadas me guardo los mensajes y los muestro por pantalla
    const mensajes = mostraConsola(alumnos, notas);

    mensajes.forEach(mensaje => {
      console.log(mensaje);
    });
    r.close();
  }
}

// Primero hago que el Usuario ingrese los 3 Alumnos
r.question("Por favor, ingrese 3 nombres de Alumnos: ", (ingreso) => {
  alumnos = ingreso.split(" ");
  
  ingresarNotas(0); // Comenzar a ingresar las notas
});