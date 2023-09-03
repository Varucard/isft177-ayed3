window.onload = function () {

  const listaOrdenada = document.getElementById("listaOrdenada");
  const ingreso = document.getElementById("ingreso");
  
  form.onsubmit = (event) => {

    const item = document.createElement('li');
    event.preventDefault();
    item.textContent = ingreso.value;
    listaOrdenada.appendChild(item);
    
  };

}