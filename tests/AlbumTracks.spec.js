import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks'
import { data, dataSingleTrack } from './trackData'

describe('renderAlbumTracks', () => {

  const markupSingleData = `
      <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4">
        <p class="music-number">1</p>
        <p class="music-title">Version</p>
        <p class="music-duration">3:35</p>
      </div>`;

  const markup = `
      <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4">
        <p class="music-number">1</p>
        <p class="music-title">Version</p>
        <p class="music-duration">3:35</p>
      </div>
      <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/98c0726f0c138730ecbfb01e8ceb8b5174fb704f?cid=8897482848704f2a8f8d7c79726a70d4">
        <p class="music-number">2</p>
        <p class="music-title">A Certain Shade of Green</p>
        <p class="music-duration">3:12</p>
      </div>`;

  it('should create and append the markup to a single track', () => {
    const element = document.createElement('div');
    renderAlbumTracks(dataSingleTrack, element);

    expect(element.innerHTML).to.be.eql(markupSingleData);
  });

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

});
