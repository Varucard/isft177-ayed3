function crearElemento(elemento, contenido) {
    const html = document.createElement(elemento); // HTMLElement
    html.textContent = contenido;
    return html;
}

console.log(crearElemento("h1", "Bienvenido"));
const parrafo = crearElemento("p", "Bienvenidos a mi página");
console.log(parrafo);