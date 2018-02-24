import renderAlertMessage from './AlertMessage';

const albumTracks = document.getElementById('album-musics');
let audioObject = null;

export default function playListTrigger() {
  albumTracks.addEventListener('click', (e) => {
    const target = e.target.parentNode;
    const previewUrl = target.getAttribute('data-track-preview');

    if (previewUrl === 'null') {
      renderAlertMessage('This music has no preview');
      return;
    }

    if (target.classList.contains('active')) {
      audioObject.pause()
    } else {
      if (audioObject) {
        audioObject.pause();
      }

      audioObject = new Audio(previewUrl);
      audioObject.play();
      target.classList.add('active');

      audioObject.addEventListener('pause', () => {
        target.classList.remove('active');
      });
    }

  });
}
