function f1() {
  f2();
  console.log("Hola Cristian");
}

function f2() {
  console.info("Hola Daiana");
}

function f3() {
  f4();
  console.warn("Hola Jorge");
}

function f4() {
  console.error("Hola Angel");
}

f1();

f3();
