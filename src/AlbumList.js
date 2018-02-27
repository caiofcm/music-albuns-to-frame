function singleItemMarkup(cur) {
  return `
    <div class="list-item" data-album-id="${cur.id}"
      data-album-640="${cur.images[0].url}"
      data-album-300="${cur.images[1].url}">
      <img src="${cur.images[2].url}" alt="${cur.name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${cur.name}</p>
        <p class="list-subtitle">${cur.artists[0].name}</p>
      </div>
    </div>`;
}

function createMarkup(data) {
  if (data.length === 0) return 'No album was found';
  return data.map((cur) => { return singleItemMarkup(cur) }).join('');
}

function renderAlbums(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}

export { singleItemMarkup, renderAlbums }

