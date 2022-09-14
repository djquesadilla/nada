import React from 'react';
import BackgroundMusic from '../BackgroundMusic';
import NadaCredits from './NadaCredits';
import NadaIntro from './NadaIntro';
import NadaStory from './NadaStory';
import './Nada.css';
import { GameStatusContext } from './GameStatusContext';

class Nada extends React.Component {
  static contextType = GameStatusContext;

  render() {
    return <div className='nada-root'>
      <div className='nada'>
        {(this.context === 'intro') && <NadaIntro />}
        {(this.context === 'playing') && <NadaStory />}
        {(this.context === 'credits') && <NadaCredits />}
        <BackgroundMusic />
      </div>
    </div>;
  }
}

export default Nada;
