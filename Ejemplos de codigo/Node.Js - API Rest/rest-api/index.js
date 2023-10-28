// Importamos la biblioteca express
const express = require("express");
// Crear una nueva aplicacion mediante express
const aplicacion = express();
// Indicamos que el cuerpo de las solicitudes tipo POST
// debe procesarse en formato JSON
aplicacion.use(express.json());

const PERSONAS = [
    {
        documento: 11222333,
        nombre: "Diego",
        apellido: "Ramirez",
    },
    {
        documento: 22333444,
        nombre: "Juan Damian",
        apellido: "Benitez",
    },
];

// Definimos una ruta para busqueda por ID (DNI)
aplicacion.get("/api/personas/:dni", (req, res) => {
    const { dni } = req.params;

    const persona = PERSONAS.find((item) => item.documento == dni);
    if (persona) res.send(persona);
    else res.status(404).send({ mensaje: "La persona no existe" });
});

// Definimos una ruta
aplicacion.get("/api/personas", (req, res) => {
    res.send({ cantidad: PERSONAS.length, datos: PERSONAS });
});

// Definimos otra ruta
aplicacion.post("/api/personas", (req, res) => {
    const { documento, nombre, apellido } = req.body;

    PERSONAS.push({
        documento,
        nombre,
        apellido,
    });

    res.status(201).send({ documento, nombre, apellido });
});

// Indicamos que express debe escuchar en el puerto 8080
// y mostrar un mensaje por consola al finalizar la
// inicializacion
aplicacion.listen(8080, () => {
    console.log("Aplicacion escuchando en el puerto 8080");
});
