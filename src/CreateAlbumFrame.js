/* global $: true */
import './vendor/jquery.justified.images.css'
import './vendor/jquery.justified.images'
import { getSelectedPhotos } from './SelectionAlbums'

const adjustsForm = document.getElementById('grid-form')
const elMinHeight = document.getElementById('minHeight')
const elMaxHeight = document.getElementById('maxHeight')
const elMargin = document.getElementById('margin')

function showPhotos() {
  const photosUrl = getSelectedPhotos()
  $('#frame').empty().justifiedImages({
    images: photosUrl,
    rowHeight: elMinHeight.value,
    maxRowHeight: elMaxHeight.value,
    thumbnailPath(photo, width, height) {
      let purl = photo.urls[1];
      if ((width > 600 || height > 600)) purl = photo.urls[0]
      if ((width > 250 || height > 250)) purl = photo.urls[1]
      if ((width < 100 || height < 100)) purl = photo.urls[2]
      return purl;
    },
    getSize() {
      return { width: 1, height: 1 }
    },
    margin: elMargin.value,
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

export default function createAlbumFrameTrigger() {
  adjustsForm.addEventListener('submit', (e) => {
    e.preventDefault()

    showPhotos()
  })

  window.addEventListener('resize', () => {
    showPhotos()
  })
}
