const persona = [
  {nombre: 'Lucas', pais: 'Argentina'},
  {nombre: 'Matias', pais: 'Argentina'},
  {nombre: 'Gonzalo', pais: 'Hackerlandia'},
  {nombre: 'Diego', pais: 'Argentina'},
  {nombre: 'Marcela', pais: 'Argentina'},
  {nombre: 'Angel', pais: 'Argentina'},
  {nombre: 'Camila', pais: 'Argentina'},
  {nombre: 'Cristian', pais: 'Argentina'},
];

const personasNacionalizadas = persona.reduce((acumulador, item) => {

  item.pais in acumulador ? acumulador[item.pais]++ : acumulador[item.pais] = 1;

  return acumulador;
}, {});

console.log(personasNacionalizadas);

const respuesta = {
  cantidad_personas: 4,
  datos: [
    { nombre: 'Lucas', apellido: 'Sosa', edad: 24 },
    { nombre: 'Cristian', apellido: 'Rives', edad: 20 },
    { nombre: 'Diego', apellido: 'Ramirez', edad: 50 },
    { nombre: 'Diego', apellido: 'Fernandez', edad: 51 },   
  ]
};

const retorno = respuesta.datos.reduce((acumulador, item) => {

  item.edad > 50 ? acumulador.mayoresDe50++ : acumulador.menoresDe50++;

  item.nombre in acumulador.contadorDeNombres ?
   acumulador.contadorDeNombres[item.nombre]++ :
   acumulador.contadorDeNombres[item.nombre] = 1;

  return acumulador;
}, {mayoresDe50: 0, menoresDe50: 0, contadorDeNombres: {}})

console.log(retorno);

const list = document.getElementById('lista');

fetch('https://reqres.in/api/users')
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    datos.data.forEach(element => {
      const item = document.createElement('li');
      item.textContent = element.first_name + ' ' + element.last_name;
      list.appendChild(item);
    });    
  })
  .catch((error) => {})