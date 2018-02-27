'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlertMessage;
var elAlertBox = document.getElementById('alert-box');

function createMarkup(msg) {
  return '<font> ' + msg + ' </font>';
}

function renderAlertMessage(msg, type) {
  var settings = {
    background: '#f44336',
    position: 'fixed',
    bottom: '5%',
    left: '50%'
  };
  if (type === 'danger') settings.background = '#f44336';
  if (type === 'info') settings.background = 'blue';
  if (type === 'success') settings.background = 'green';
  if (type === 'warnning') settings.background = 'yellow';
  Object.keys(settings).forEach(function (key) {
    elAlertBox.style[key] = settings[key];
  });
  elAlertBox.style.display = 'block';
  elAlertBox.innerHTML = createMarkup(msg);
  setTimeout(function () {
    elAlertBox.style.display = 'none';
  }, 2000);
}