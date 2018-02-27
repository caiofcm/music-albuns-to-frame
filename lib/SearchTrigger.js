'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchEnterTrigger;

var _SpotifyServerSide = require('./SpotifyServerSide');

var _AlbumList = require('./AlbumList');

var _AlertMessage = require('./AlertMessage');

var _AlertMessage2 = _interopRequireDefault(_AlertMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var albumList = document.getElementById('album-list');
// import search from 'spotify-api-wrapper-tdd/lib/search'

var searchInput = document.getElementById('search-input');
var searchForm = document.getElementById('search-form');
var elTopBtn = document.getElementById('btn-track');

var spotify = null;

function checkIfAuthorized() {
  if (!spotify) return false;
  if (!spotify.token) return false;
  return true;
}

function processTopAlbumsItems(data) {
  var albumItems = data.items.map(function (cur) {
    cur.album.artists = cur.artists;
    return cur.album;
  });
  return albumItems;
}

function searchEnterTrigger() {
  searchForm.addEventListener('submit', function (e) {
    spotify = (0, _SpotifyServerSide.getSpotifyAPIObject)();
    e.preventDefault();
    if (checkIfAuthorized()) {
      spotify.search.albums(searchInput.value).then(function (data) {
        return (0, _AlbumList.renderAlbums)(data.albums.items, albumList);
      });
    } else {
      console.log('Unauthorized!');
      (0, _AlertMessage2.default)('Unauthorized! Login to Spotify first.');
    }
  });

  elTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    (0, _SpotifyServerSide.fetchUserTopTracks)().then(function (data) {
      return processTopAlbumsItems(data);
    }).then(function (albums) {
      return (0, _AlbumList.renderAlbums)(albums, albumList);
    }).catch(function (err) {
      (0, _AlertMessage2.default)(err);
    });
  });
  // TO BE DELETED:
  // searchForm.dispatchEvent(new Event('submit'));
}