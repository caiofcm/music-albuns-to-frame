/**
 * Selection Albums module: select from search
 * box and include in the selection box
 * @module SelectionAlbums
 * @see none
 */

import { setTimeout } from 'timers';

const albumList = document.getElementById('album-list')
const selectedList = document.getElementById('selected-box')

// let listSelectedAlbum = []

function addAlbumToSelectedBox(elAlbum) {
  elAlbum.classList.add('grab')
  setTimeout(() => {
    selectedList.appendChild(elAlbum);
    elAlbum.classList.remove('grab')
  }, 400)
}

function removeAlbumFromSelectedBox(elAlbum) {
  albumList.prepend(elAlbum)
}

function getSelectedPhotos() {
  return Array.from(selectedList.children).map((cur) => {
    return {
      urls: [
        cur.getAttribute('data-album-640'),
        cur.getAttribute('data-album-300'),
        cur.querySelector('img').getAttribute('src'),
      ],
    }
  })
}

function selectionOfAlbums() {
  albumList.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const elAlbum = target.closest('.list-item');
    addAlbumToSelectedBox(elAlbum);
  });

  selectedList.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const elAlbum = target.closest('.list-item');
    removeAlbumFromSelectedBox(elAlbum);
  });
}

// Auxiliary functions:
// function isAlbumSelected(elAlbum) {
//   return !!elAlbum.classList.contains('item-selected')
// }

export {
  selectionOfAlbums,
  getSelectedPhotos,
}
