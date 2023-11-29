const arreglo = [
  {
    nombre: "Pepe",
    apellido: "Luis",
    edad: 20
  },
  {
    nombre: "Luis",
    apellido: "Fonsi",
    edad: 40
  },
  {
    nombre: "Mariela",
    apellido: "Rodríguez",
    edad: 23
  }
]

const funcion = arreglo.map((persona) => {
  return { nacioEn: ( 2023 - persona.edad)}
});

console.log(funcion);

// Resolución del Ejercicio
/*
fetch("https://url-api.com")
  .then((res) => res.json())
  .then((datos) => datos.map((persona) => {
    return { nacioEn: ( 2023 - persona.edad)}
  }))
  .catch((error) => console.error(error));
*/

  
