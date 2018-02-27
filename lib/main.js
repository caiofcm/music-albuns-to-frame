'use strict';

var _SearchTrigger = require('./SearchTrigger');

var _SearchTrigger2 = _interopRequireDefault(_SearchTrigger);

var _SelectionAlbums = require('./SelectionAlbums');

var _SpotifyServerSide = require('./SpotifyServerSide');

var _CreateAlbumFrame = require('./CreateAlbumFrame');

var _CreateAlbumFrame2 = _interopRequireDefault(_CreateAlbumFrame);

var _SaveFrameToFile = require('./SaveFrameToFile');

var _SaveFrameToFile2 = _interopRequireDefault(_SaveFrameToFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Application started');
(0, _SpotifyServerSide.fetchAPITokenFromBackEnd)();
(0, _SearchTrigger2.default)();
(0, _SelectionAlbums.selectionOfAlbums)();
(0, _CreateAlbumFrame2.default)();
(0, _SaveFrameToFile2.default)();