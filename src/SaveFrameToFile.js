// import html2canvas from 'html2canvas'
import FileSaver from 'file-saver'
import domtoimage from 'dom-to-image'

const elSave = document.getElementById('btn-download')
const elFrame = document.getElementById('frame')

export default function saveFrameToFileTrigger() {
  elSave.addEventListener('click', () => {
    domtoimage.toBlob(elFrame)
      .then((blob) => {
        FileSaver.saveAs(blob, 'album_frame.png')
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error)
      })
  })
}
