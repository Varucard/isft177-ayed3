window.onload = function () {

  const personas = ['Pepe', 'Luis', 'Homero', 'Marge', 'Bart', 'Lisa', 'Maggie'];
  const profesiones = ['Zapatero', 'Hornero', 'Insperctor Nuclear', 'Ama de casa', 'Vandalo', 'Estudiante', 'Desocupada'];
  const body = document.body;
  const div = document.createElement('div');
  
  body.appendChild(div);
  
  for(let i = 0; i < personas.length; i++) {
    const parrafo = document.createElement('p');
    parrafo.textContent = `${personas[i]} - ${profesiones[i]}`;
    div.appendChild(parrafo);
  };
  
}