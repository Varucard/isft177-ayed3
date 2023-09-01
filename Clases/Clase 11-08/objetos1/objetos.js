const alumno = {
    nombre: "Lucas",
    promedio: 9.66
};

const otroalumno = {
    nombre: "Federico",
    promedio: 7.83
};

/*console.log(alumno);
console.log(alumno.nombre);
console.log(alumno["nombre"]);
console.log(alumno.promedio);
console.log(alumno["promedio"]);*/

let alumnos = [
    {
        nombre: "Lucas",
        promedio: 3
    },
    {
        nombre: "Cristian",
        promedio: 7.8
    },
    {
        nombre: "Camila",
        promedio: 8.5
    }
];

// console.log(alumnos[0]);
// console.log(alumnos.at(-1).nombre)
// console.log(alumnos.at(-1).promedio);

const notas = alumnos.map((item) => {
    if (item.promedio >= 7) {
        return item.nombre + " Aprobado";
    }
    
    return item.nombre + " Desaprobado";

});

console.log(notas);