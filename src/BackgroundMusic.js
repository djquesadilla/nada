import React from 'react';
import Sound from 'react-sound';
import Dream from './music/quest-joana-gama-luis-fernandes-dream.mp3'

class BackgroundMusic extends React.Component {
  render() {
    return <Sound
      url={Dream}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />;
  }
}

export default BackgroundMusic;
