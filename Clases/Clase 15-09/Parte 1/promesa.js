const personas = [
  {nombre_completo: 'Pepe Luis', nacido: 1984},
  {nombre_completo: 'Margarita Alfonso', nacido: 1981},
  {nombre_completo: 'Angel Alfonso', nacido: 2002},
  {nombre_completo: 'Federico Gomez', nacido: 2018},
  {nombre_completo: 'Peter Alfonso', nacido: 1966},
  {nombre_completo: 'Adrian Lopez', nacido: 2005},
  {nombre_completo: 'Franco Guzman', nacido: 2003},
];

const persona2 = personas.map((item) => {
  let nombreCompleto = item.nombre_completo.split(' ');
  let edad = 2023 - item.nacido + ' Años';
  
  return {
    nombre: nombreCompleto[0],
    apellido: nombreCompleto[1],
    edad: edad
  }
});

const personasMasDe35 = persona2.filter((item) => {

  let edad = item.edad.split(' ');

  return edad[0] >= 35;
});

const booleano = [true, false, true, false, true];

const promesa = new Promise((resolve, reject) => {
  let indice = Math.floor(Math.random() * booleano.length);

  setTimeout(() => {
    booleano[indice] ?
     resolve('Le pegaste fiera: ' + indice) :
     reject('Segui probando maquina: ' + indice);
  }, 1000); 
});

promesa
  .then((resultado) => console.warn(resultado))
  .catch((error) => console.error(error))

console.log(persona2);
console.log(personasMasDe35);