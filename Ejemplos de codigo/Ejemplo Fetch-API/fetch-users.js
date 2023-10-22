/**
 * Endpoint: GET  https://reqres.in/api/users
 *           POST https://reqres.in/api/users
 */

/** Sintaxis .then().catch() */
// fetch('https://reqres.in/api/users')        // Promesa
//     .then((respuesta) => respuesta.json())  // Promesa
//     .then((datos) => {
//         const usuarios = datos.data.map(usuario => ({ 
//             nombre: usuario.first_name,
//             apellido: usuario.last_name,
//             avatar: usuario.avatar
//          }));

//         /** Construir una lista no ordenada con nombre y apellido y avatar */
//         const lista = document.createElement("ul");
//         usuarios.forEach((usuario) => {
//             const li = document.createElement("li");
//             li.innerHTML = `<img src="${usuario.avatar}"> ${usuario.nombre} ${usuario.apellido}`;
//             lista.appendChild(li);
//         })
//         document.body.appendChild(lista);
//     })
//     .catch((error) => console.error(error));  // Gestión del error

/** Sintaxis async-await */
(async () => {
    try {
    const respuesta = await fetch('https://reqres.in/api/users');
    const datos = await respuesta.json();

    const usuarios = datos.data.map(usuario => ({ 
            nombre: usuario.first_name,
            apellido: usuario.last_name,
            avatar: usuario.avatar
         }));

        /** Construir una lista no ordenada con nombre y apellido y avatar */
        const lista = document.createElement("ul");
        usuarios.forEach((usuario) => {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${usuario.avatar}"> ${usuario.nombre} ${usuario.apellido}`;
            lista.appendChild(li);
        })
        document.body.appendChild(lista);
    } catch (error) {
        console.error(error);
    }
})();