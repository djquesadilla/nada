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
    return <div className='nada'>
      {true && <NadaIntro />}
      {true && <NadaStory />}
      {true && <NadaCredits />}
      <BackgroundMusic />
    </div>;
  }
}

export default Nada;
