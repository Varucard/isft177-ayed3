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

function numeroLoco(multiplicador) {
  return Math.round(Math.random() * multiplicador);
} 

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

const resultado = paisesConProvincias.reduce((acumulador, paisConProvincias) => {
  let provincias;

  // Solo si posee mas de 2 capitales inicio
  if (paisConProvincias.provincias.length > 2) {

    // Guardo el País para despues armar el objeto
    const pais = paisConProvincias.pais;
    // Recorro el arreglo de las provincias de cada pais con map para generar el objeto
    provincias = paisConProvincias.provincias.map(provincia => ({
      pais: pais,
      provincia: provincia
    }));
    
  }

  return acumulador.concat(provincias);

}, []);

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (numeroLoco(100) >= 50) 
      resolve('Resuelta OK')
    else
      reject ('Espera sentado maquina')
  }, 200);
})

console.log(sumaPosImpar);
console.log(aprobadoDesaprobados);
console.log(alumnosConPromedio);
console.log(resultado);

promesa
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error))

