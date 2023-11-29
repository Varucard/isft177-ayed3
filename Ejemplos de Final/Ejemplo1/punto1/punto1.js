// VAR:
// Alcance de función (function scope): Las variables declaradas con var tienen un alcance limitado a la función más cercana en la que están declaradas. No tienen un alcance de bloque.
// Hoisting: Las declaraciones var son "elevadas" (hoisted) al inicio de su contexto de ejecución, lo que significa que se pueden usar antes de su declaración.
// Reasignación: Se pueden reasignar y actualizar sin restricciones.

// LET:
// Alcance de bloque (block scope): Las variables declaradas con let tienen un alcance limitado al bloque más cercano en el que están declaradas (bloque, declaración for, etc.).
// Hoisting: Aunque se "elevan" al inicio de su bloque, no se pueden utilizar antes de su declaración. Esto evita el problema de "temporal dead zone".
// Reasignación: Se pueden reasignar, pero no se pueden volver a declarar en el mismo ámbito.

// CONST:
// Alcance de bloque (block scope): Similar a let, las variables declaradas con const tienen un alcance limitado al bloque más cercano en el que están declaradas.
// Hoisting: Al igual que let, las declaraciones const se "elevan" al inicio de su bloque, pero no se pueden utilizar antes de su declaración.
// Reasignación: No se pueden reasignar después de su declaración. Sin embargo, si la variable es un objeto o un array, sus propiedades o elementos pueden ser modificados.