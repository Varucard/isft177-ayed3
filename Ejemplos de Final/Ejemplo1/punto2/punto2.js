// Al transcurrir 5 Segundos la promesa emitira un mensaje de fallo que sera capturado y mostrado por pantalla
const promesa = new Promise((resolve, reject) => {
	setTimeout(() => { reject("Fallo"); }, 5000);
});

promesa.then((respuesta) => console.info(respuesta)).catch((error) => console.warn("El error fue: " + error));