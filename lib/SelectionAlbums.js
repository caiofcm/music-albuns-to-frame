'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedPhotos = exports.selectionOfAlbums = undefined;

var _timers = require('timers');

var albumList = document.getElementById('album-list'); /**
                                                        * Selection Albums module: select from search
                                                        * box and include in the selection box
                                                        * @module SelectionAlbums
                                                        * @see none
                                                        */

var selectedList = document.getElementById('selected-box');

// let listSelectedAlbum = []

function addAlbumToSelectedBox(elAlbum) {
  elAlbum.classList.add('grab');
  (0, _timers.setTimeout)(function () {
    selectedList.appendChild(elAlbum);
    elAlbum.classList.remove('grab');
  }, 400);
}

function removeAlbumFromSelectedBox(elAlbum) {
  albumList.prepend(elAlbum);
}

function getSelectedPhotos() {
  return Array.from(selectedList.children).map(function (cur) {
    return {
      urls: [cur.getAttribute('data-album-640'), cur.getAttribute('data-album-300'), cur.querySelector('img').getAttribute('src')]
    };
  });
}

function selectionOfAlbums() {
  albumList.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;
    var elAlbum = target.closest('.list-item');
    addAlbumToSelectedBox(elAlbum);
  });

  selectedList.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;
    var elAlbum = target.closest('.list-item');
    removeAlbumFromSelectedBox(elAlbum);
  });
}

// Auxiliary functions:
// function isAlbumSelected(elAlbum) {
//   return !!elAlbum.classList.contains('item-selected')
// }

exports.selectionOfAlbums = selectionOfAlbums;
exports.getSelectedPhotos = getSelectedPhotos;