const v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const alumnos = [
  {
    nombre: 'Cristian',
    promedio: 7.5
  },
  {
    nombre: 'Gonzalo',
    promedio: 8.66
  },
  {
    nombre: 'Lucas',
    promedio: 10
  },
  {
    nombre: 'Matias',
    promedio: 5.66
  },
];

const alumnosConNotas = [
  {
    nombre: 'Cristian',
    notas: [6.66, 7.5, 8.33]
  },
  {
    nombre: 'Gonzalo',
    notas: [8.66, 7.5, 8.33]
  },
  {
    nombre: 'Lucas',
    notas: [8.66, 1.5, 7.5, 8.33]
  },
  {
    nombre: 'Matias',
    notas: [9.66, 7.5, 8.33, 4.55]
  },
];

const sumaPosImpar = v.reduce((acumulador, item, indice) => {
  return indice % 2 === 1 ? acumulador + item : acumulador;
}, 0);

const aprobadoDesaprobados = alumnos.reduce((acumulador, item) => {
  item.promedio >= 7 ? acumulador.aprobados++ : acumulador.desaprobados++

  return acumulador
}, {aprobados: 0, desaprobados: 0})

const alumnosConPromedio = alumnosConNotas.map(item => {
  return {
    nombre: item.nombre,
    promedio: item.notas.reduce((acumulador, item, indice, arreglo) => { return acumulador + item / arreglo.length; }, 0)
  }
})

/**
*Dado un arreglo de paises y provincias, devolver un arreglo de objetos
*donde la estructura de cada uno de ellos sea:
*
* [
*   { pais: "argentina", provincia: "buenos aires"},
*   ...
* ]
*Considerar solo los paises que tengan mas de 2 provincias.
*/
const paisesConProvincias = [
  {
    pais: "Argentina",
    provincias: ["Buenos Aires", "La Rioja", "Córdoba"]
  },
  {
    pais: "Uruguay",
    provincias: ["Maldonado", "Montevideo", "Ciudad del Este", "Canelones"]
  },
  {
    pais: "Estados Unidos",
    provincias: ["Delaware", "Manhattan", "Iowa", "Texas", "Florida", "Des Moines"]
  },
  {
    pais: "Islandia",
    provincias: ["Reikjavic"]
  }
];

const algo = paisesConProvincias.filter(item => item.provincias.length > 2);

const algo2 = algo.map(item => {

  aux = [];

  item.provincias.forEach(provincia => {
    aux.push({
      pais: item.pais,
      provincia: provincia
    })
  });

  return aux;
})

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (numeroLoco() >= 50) 
      resolve('Resuelta OK')
    else
      reject ('Espera sentado maquina')
  }, 200);
})


function numeroLoco() {
  return Math.round(Math.random() * 100);
} 

console.log(sumaPosImpar);
console.log(aprobadoDesaprobados);
console.log(alumnosConPromedio);
console.log(algo2);

promesa
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error))

