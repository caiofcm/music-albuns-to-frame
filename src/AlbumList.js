function createMarkup(data) {
  if (data.length === 0) return `No album was found`;
  return data.map((cur) => {
    return `
    <div class="list-item" data-album-id="${cur.id}">
      <img src="${cur.images[2].url}" alt="${cur.name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${cur.name}</p>
        <p class="list-subtitle">${cur.artists[0].name}</p>
      </div>
    </div>`}).join('');
}


export default function renderAlbums(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
