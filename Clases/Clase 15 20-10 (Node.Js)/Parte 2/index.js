fetch('https://reqres.in/api/users')
  .then((res) => res.json())
  .then((datos) => {
    // Procesar los datos devueltos por la API de forma que unicamente aparezcan los usuariso cuyo nombre tenga 6 o mas caracteres, y ademas los usuarios devueltos tengan el siguiente formato: { nombre: <nombre del usuario>, correo: <correo del usuario> }

    const megaDatos = datos.data.filter(dato => dato.first_name.length >= 6 ).map((item) => {
      return {
        nombre: item.first_name,
        email: item.email
      }
    });

    console.log(megaDatos)
  })
  .catch((error) => console.error(error))