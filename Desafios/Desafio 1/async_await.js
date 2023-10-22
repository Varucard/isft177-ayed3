const body = document.body;
const img = document.createElement('img');

(async () => {
  const texto = await (await fetch('https://catfact.ninja/fact')).json();
  const gato = await fetch('https://cataas.com/cat/says/' + texto.fact +'');
  
  img.setAttribute('src', gato.url);
  img.setAttribute('style', 'border-radius:150px; border:3px solid #666');
  
  body.appendChild(img);
  
})();