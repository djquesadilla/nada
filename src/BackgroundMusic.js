import React from 'react';
import Sound from 'react-sound';
import Molero from './music/molero-phasma-gigs.mp3'

class BackgroundMusic extends React.Component {
  render() {
    return <Sound
      url={Molero}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />;
  }
}

export default BackgroundMusic;
