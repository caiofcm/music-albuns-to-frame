import convertToHumanTime from './ConvertToHumanTime';

function createMarkup(data) {
  return `
      <div class="music" data-track-preview="${data.preview_url}">
        <p class="music-number">${data.track_number}</p>
        <p class="music-title">${data.name}</p>
        <p class="music-duration">${convertToHumanTime(data.duration_ms)}</p>
      </div>`;
};

export default function renderAlbumTracks(data, element) {
  element.innerHTML = data.items.map( cur => {
    return createMarkup(cur);
  }).join('');
}
