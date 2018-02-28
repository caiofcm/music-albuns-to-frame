import './main.css'
import './normalize.css'
import searchEnterTrigger from './SearchTrigger'
import { selectionOfAlbums } from './SelectionAlbums'
import { fetchAPITokenFromBackEnd } from './SpotifyServerSide'
import createAlbumFrameTrigger from './CreateAlbumFrame'
import SaveFrameToFileTrigger from './SaveFrameToFile'

console.log('Application started')
fetchAPITokenFromBackEnd()
searchEnterTrigger()
selectionOfAlbums()
createAlbumFrameTrigger()
SaveFrameToFileTrigger()
