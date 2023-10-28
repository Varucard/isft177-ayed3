const express = require('express');

const aplicacion = express();
aplicacion.use(express.json());

const personas = [
  {
    documento: 41550112,
    nombre: 'Cristian',
    apellido: 'Marquez'
  },
  {
    documento: 20771757,
    nombre: 'Maria',
    apellido: 'Marquez'
  },
  {
    documento: 21903130,
    nombre: 'Gustavo',
    apellido: 'Marquez'
  }
]

aplicacion.get('/api/personas', (req, res) => {
  res.send({cantidad: personas.length, datos: personas});
});

aplicacion.get('/api/personas/:dni/:nombre', (req, res) => {
  const {dni, nombre} = req.params;
  res.send(`Tu nombre es ${nombre} y tu DNI es ${dni}`);
});

aplicacion.get('/api/personas/:dni', (req, res) => {
  const { dni } = req.params;

  const persona = personas.find((item) => item.documento == dni);
  if (persona) res.send(persona);
  else res.status(404).send({ mensaje: "La persona no existe" });
});

aplicacion.post("/api/personas", (req, res) => {
  const { documento, nombre, apellido } = req.body;

    personas.push({
        documento,
        nombre,
        apellido,
    });

    res.status(201).send({ documento, nombre, apellido });
});

aplicacion.listen(8080, () => {
  console.log('Aplicación escuchando en el puerto 8080');
});