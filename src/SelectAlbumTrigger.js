import spotify from './Spotify'
import renderAlbumInfo from './AlbumInfo'
import renderAlbumTracks from './AlbumTracks'

const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info')
const elTracks = document.getElementById('album-musics');

function makeRequest(albumId) {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks, elTracks));
}

export default function selectAlbumTrigger () {
  albumList.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const albumId = target.closest('.list-item').
      getAttribute('data-album-id');
    console.log(albumId);
    makeRequest(albumId);
  });
}
