'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAlbumFrameTrigger;

var _SelectionAlbums = require('./SelectionAlbums');

var adjustsForm = document.getElementById('grid-form'); /* global $: true */

var elMinHeight = document.getElementById('minHeight');
var elMaxHeight = document.getElementById('maxHeight');
var elMargin = document.getElementById('margin');

function showPhotos() {
  var photosUrl = (0, _SelectionAlbums.getSelectedPhotos)();
  $('#frame').empty().justifiedImages({
    images: photosUrl,
    rowHeight: elMinHeight.value,
    maxRowHeight: elMaxHeight.value,
    thumbnailPath: function thumbnailPath(photo, width, height) {
      var purl = photo.urls[1];
      if (width > 600 || height > 600) purl = photo.urls[0];
      if (width > 250 || height > 250) purl = photo.urls[1];
      if (width < 100 || height < 100) purl = photo.urls[2];
      return purl;
    },
    getSize: function getSize() {
      return { width: 1, height: 1 };
    },

    margin: elMargin.value
  });
}

// function mockPhotos() {
//   $.ajax({
//     url: 'https://api.flickr.com/services/rest/?jsoncallback=?',
//     method: 'get',
//     data: {
//       method: 'flickr.photos.search',
//       api_key: '2b76793b6787a09c14929811d2cef67e',
//       text: 'potrait',
//       sort: 'interestingness-desc',
//       format: 'json',
//       extras: 'url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l',
//       per_page: $('#numPhotos').val()
//     },
//     dataType: 'json',
//     success: function (data) {
//       showPhotos(data.photos.photo);
//     }
//   })
// }

function createAlbumFrameTrigger() {
  adjustsForm.addEventListener('submit', function (e) {
    e.preventDefault();

    showPhotos();
  });

  window.addEventListener('resize', function () {
    showPhotos();
  });
}