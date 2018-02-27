'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function singleItemMarkup(cur) {
  return '\n    <div class="list-item" data-album-id="' + cur.id + '"\n      data-album-640="' + cur.images[0].url + '"\n      data-album-300="' + cur.images[1].url + '">\n      <img src="' + cur.images[2].url + '" alt="' + cur.name + '" class="list-image">\n      <div class="list-description">\n        <p class="list-title">' + cur.name + '</p>\n        <p class="list-subtitle">' + cur.artists[0].name + '</p>\n      </div>\n    </div>';
}

function createMarkup(data) {
  if (data.length === 0) return 'No album was found';
  return data.map(function (cur) {
    return singleItemMarkup(cur);
  }).join('');
}

function renderAlbums(data, element) {
  var markup = createMarkup(data);
  element.innerHTML = markup;
}

exports.singleItemMarkup = singleItemMarkup;
exports.renderAlbums = renderAlbums;