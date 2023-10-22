const columnContainer = document.querySelector('div.columns');
console.log(columnContainer);
(async () => {
  const respuesta = await (await fetch('https://www.digi-api.com/api/v1/digimon')).json();

  respuesta.content.forEach(digimon => {
    const column = document.createElement('div');
    column.setAttribute('class', 'column');

    const card = `<div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <a href="${digimon.href}" target="_blank">
            <img src="${digimon.image}" alt="${digimon.name}">
          </a>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="card-header-title is-centered" style="height: 50px;">
            <p class="title is-4">${digimon.name}</p>
          </div>
        </div>
      </div>
    </div>`;

    column.innerHTML = card;

    columnContainer.appendChild(column);
  });

})();