const elAlertBox = document.getElementById('alert-box');

function createMarkup(msg) {
  return `<font> ${msg} </font>`
}

export default function renderAlertMessage(msg, type) {
  const settings = {
    background: '#f44336',
    position: 'fixed',
    bottom: '5%',
    left: '50%',
  };
  if (type === 'danger') settings.background = '#f44336'
  if (type === 'info') settings.background = 'blue'
  if (type === 'success') settings.background = 'green'
  if (type === 'warnning') settings.background = 'yellow'
  Object.keys(settings).forEach((key) => {
    elAlertBox.style[key] = settings[key]
  })
  elAlertBox.style.display = 'block';
  elAlertBox.innerHTML = createMarkup(msg);
  setTimeout(() => {
    elAlertBox.style.display = 'none';
  }, 2000);
}
