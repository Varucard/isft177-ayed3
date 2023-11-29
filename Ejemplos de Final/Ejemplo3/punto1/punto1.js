// Al ejecutarse el codigo se mostrara dependiendo la condición un mensaje de error o el numero que fue analizado
(async () => {
  const promesa = new Promise((resolve, reject) => {
  const n = Math.floor(Math.random()*25)+1;
  if (n%5 == 0)
    resolve(n);
  else
    reject("Error");
  });

  promesa
  .then((res) => alert(res))
  .catch((error) => alert(error));
})();
