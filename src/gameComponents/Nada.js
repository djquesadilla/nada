import React from 'react';
import BackgroundMusic from '../BackgroundMusic';
import NadaCredits from './NadaCredits';
import NadaIntro from './NadaIntro';
import NadaStory from './NadaStory';
import './Nada.css';

class Nada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'intro',
      startTime: Date.now(),
    };

    this.startPlaying = this.startPlaying.bind(this);
    this.endCredits = this.endCredits.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  startPlaying() { this.setState({ gameStatus: 'playing' }); }
  endCredits() { this.setState({ gameStatus: 'credits', endTime: Date.now() }); }
  playAgain() { this.setState({ gameStatus: 'intro' }); }

  render() {
    return <div className='nada-root'>
      <div className='nada'>
        {this.state.gameStatus === 'intro' && <NadaIntro startPlaying={this.startPlaying} />}
        {this.state.gameStatus === 'playing' && <NadaStory endCredits={this.endCredits} />}
        {this.state.gameStatus === 'credits' && <NadaCredits playAgain={this.playAgain} startTime={this.state.startTime} endTime={this.state.endTime} />}
        <BackgroundMusic />
      </div>
    </div>;
  }
}

export default Nada;
