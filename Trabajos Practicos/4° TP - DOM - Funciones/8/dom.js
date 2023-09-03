const temperaturas = [24.5, 11.2, 5.6, 7.8, 3.4, 2.4, 10.8, 11.4, 9.8, 25.0, 22.3];

console.log(temperaturas);
// Forma de convertir de Celsius a Farenheit
console.log(temperaturas.map(item => ((item * 9/5) + 32)));