'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUserTopTracks = exports.getSpotifyAPIObject = exports.fetchAPITokenFromBackEnd = undefined;

var _spotifyApiWrapperTdd = require('spotify-api-wrapper-tdd');

var _spotifyApiWrapperTdd2 = _interopRequireDefault(_spotifyApiWrapperTdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import renderAlertMessage from './AlertMessage'
/* eslint no-cond-assign:0 */

var spotify = void 0;
var elTriggerAuth = document.getElementById('trigger-auth');

var config = {
  URL: 'http://localhost:8888/login'

  /**
   * Obtains parameters from the hash of the URL
   * @return Object
   */
};function getHashParams() {
  var hashParams = {};
  var e = void 0;
  var r = /([^&;=]+)=?([^&;]*)/g;
  var q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

function fetchUserTopTracks() {
  var endPoint = '/me/top/tracks';
  var headers = {
    headers: {
      Authorization: '\'Bearer ' + spotify.token + ' \''
    }
  };
  return fetch(spotify.apiURL + endPoint, headers).then(function (data) {
    return data.json();
  });
}

/**
 * Redirect to backend to process the authorization to Spotify
 * Returning the API Token for Access.
 * @return String
 */
function fetchAPITokenFromBackEnd() {
  elTriggerAuth.addEventListener('click', function () {
    window.location.href = config.URL;
  });
}

// Work around to get Access token from query string:
window.onload = function () {
  var tokens = getHashParams();
  if (tokens.access_token) {
    spotify = new _spotifyApiWrapperTdd2.default({
      token: tokens.access_token
    });
    fetchUserTopTracks();
  }
};

function getSpotifyAPIObject() {
  return spotify;
}

exports.fetchAPITokenFromBackEnd = fetchAPITokenFromBackEnd;
exports.getSpotifyAPIObject = getSpotifyAPIObject;
exports.fetchUserTopTracks = fetchUserTopTracks;