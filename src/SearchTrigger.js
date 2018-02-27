import { getSpotifyAPIObject, fetchUserTopTracks } from './SpotifyServerSide'
import { renderAlbums } from './AlbumList'
// import search from 'spotify-api-wrapper-tdd/lib/search'
import renderAlertMessage from './AlertMessage'


const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const elTopBtn = document.getElementById('btn-track');

let spotify = null

function checkIfAuthorized() {
  if (!spotify) return false
  if (!spotify.token) return false
  return true
}

function processTopAlbumsItems(data) {
  const albumItems = data.items.map((cur) => {
    cur.album.artists = cur.artists
    return cur.album
  })
  return albumItems
}

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    spotify = getSpotifyAPIObject()
    e.preventDefault()
    if (checkIfAuthorized()) {
      spotify.search.albums(searchInput.value)
        .then(data => renderAlbums(data.albums.items, albumList));
    } else {
      console.log('Unauthorized!')
      renderAlertMessage('Unauthorized! Login to Spotify first.')
    }
  })

  elTopBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchUserTopTracks()
      .then((data) => {
        return processTopAlbumsItems(data)
      })
      .then(albums => renderAlbums(albums, albumList))
      .catch((err) => {
        renderAlertMessage(err)
      })
  })
  // TO BE DELETED:
  // searchForm.dispatchEvent(new Event('submit'));
}
