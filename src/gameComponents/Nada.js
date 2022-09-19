import React from 'react';
import NadaCredits from './NadaCredits';
import NadaIntro from './NadaIntro';
import NadaStory from './NadaStory';
import './Nada.css';

class Nada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'intro',
    };

    this.startPlaying = this.startPlaying.bind(this);
    this.endCredits = this.endCredits.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  startPlaying() { this.setState({ gameStatus: 'playing', startTime: Date.now() }); }
  endCredits() { this.setState({ gameStatus: 'credits', endTime: Date.now() }); }
  playAgain() { this.setState({ gameStatus: 'intro' }); }

  render() {
    return <div className='nada-root'>
      <div className='nada'>
        {this.state.gameStatus === 'intro' && <NadaIntro startPlaying={this.startPlaying} />}
        {this.state.gameStatus === 'playing' && <NadaStory endCredits={this.endCredits} />}
        {this.state.gameStatus === 'credits' && <NadaCredits playAgain={this.playAgain} startTime={this.state.startTime} endTime={this.state.endTime} />}
      </div>
    </div>;
  }
}

export default Nada;
