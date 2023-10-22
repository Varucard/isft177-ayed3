const crearLista = (tipoDeLista, numeroDeItems) => {
    const lista = document.createElement(tipoDeLista);

    for(let k = 0; k < numeroDeItems; k++) {
        const item = document.createElement("li");
            item.textContent = "Elemento de la lista";
        lista.appendChild(item);
    }

    return lista;
}

console.log(crearLista("ol", 10));