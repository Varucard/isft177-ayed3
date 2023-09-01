const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 101, 102, 150];

console.log(v);
// console.log(v.length);
// console.log(v[v.length - 1]);
// console.log("Usando at: " + v.at(0))

const dobles = v.map(function(item) {
    return 2 * item;
});

const doblesflecha = v.map((item) => 2 * item);

console.log(dobles);
console.log(doblesflecha);
console.log(v);

