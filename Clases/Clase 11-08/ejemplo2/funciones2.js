console.log("funciones2.js cargado");
console.log(saludar("Marcela"));

// Declaración de función
function saludar(aQuien) {
    return "Hola " + aQuien;
}

// console.log(despedir("Matias"));

// Expresión de función
const despedir = function(aQuien) {
    return "Hasta la vista, " + aQuien;
}

// Funciones flecha
let saludarflecha = (aQuien) => {
    return "Hola, " + aQuien + ", como andas?";
}

// Funcion flecha con return implicito
let saludarflechamascorta = (aQuien) => "Hola, " + aQuien + ", como va?"; 

console.log(saludarflecha("Lucas"));
console.log(saludarflechamascorta("Diego"));