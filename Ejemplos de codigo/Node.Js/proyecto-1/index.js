import fetch from "node-fetch";

fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((datos) => {
        console.log(datos);
        
        // Procesar los datos devueltos por la API
        // de forma que unicamente aparezcan los usuarios
        // cuyo nombre tenga 6 o mas caracteres, y ademas
        // los usuarios devueltos tengan el siguiente formato:
        // { nombre: <nombre del usuario>, correo: <correo del usuario> }
    })
    .catch((error) => console.error(error));

