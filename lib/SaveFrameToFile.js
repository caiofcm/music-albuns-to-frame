'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = saveFrameToFileTrigger;

var _fileSaver = require('file-saver');

var _fileSaver2 = _interopRequireDefault(_fileSaver);

var _domToImage = require('dom-to-image');

var _domToImage2 = _interopRequireDefault(_domToImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import html2canvas from 'html2canvas'
var elSave = document.getElementById('btn-download');
var elFrame = document.getElementById('frame');

function saveFrameToFileTrigger() {
  elSave.addEventListener('click', function () {
    _domToImage2.default.toBlob(elFrame).then(function (blob) {
      _fileSaver2.default.saveAs(blob, 'album_frame.png');
    }).catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  });
}