import SpotifyWrapperTdd from 'spotify-api-wrapper-tdd';
// import renderAlertMessage from './AlertMessage'
/* eslint no-cond-assign:0 */

let spotify;
const elTriggerAuth = document.getElementById('trigger-auth')

const config = {
  URL: 'http://localhost:8888/login',
}

/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */
function getHashParams() {
  const hashParams = {}
  let e
  const r = /([^&;=]+)=?([^&;]*)/g
  const q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}


function fetchUserTopTracks() {
  const endPoint = '/me/top/tracks'
  const headers = {
    headers: {
      Authorization: `'Bearer ${spotify.token} '`,
    },
  }
  return fetch(spotify.apiURL + endPoint, headers)
    .then((data) => {
      return data.json()
    })
}

/**
 * Redirect to backend to process the authorization to Spotify
 * Returning the API Token for Access.
 * @return String
 */
function fetchAPITokenFromBackEnd() {
  elTriggerAuth.addEventListener('click', () => {
    window.location.href = config.URL;
  })
}

// Work around to get Access token from query string:
window.onload = () => {
  const tokens = getHashParams();
  if (tokens.access_token) {
    spotify = new SpotifyWrapperTdd({
      token: tokens.access_token,
    })
    fetchUserTopTracks()
  }
}

function getSpotifyAPIObject() {
  return spotify
}

export {
  fetchAPITokenFromBackEnd,
  getSpotifyAPIObject,
  fetchUserTopTracks,
}
