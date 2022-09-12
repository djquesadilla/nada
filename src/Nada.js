import React from 'react';
import BackgroundMusic from './BackgroundMusic';
import NadaStory from './gameComponents/NadaStory';
import './Nada.css';

class Nada extends React.Component {
  render() {
    return <div className='nada'>
      <NadaStory />
      <BackgroundMusic />
    </div>;
  }
}

export default Nada;
