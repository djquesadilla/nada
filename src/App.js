import React from 'react';
import { GameStatusContext } from './gameComponents/GameStatusContext';
import Nada from './gameComponents/Nada';

class App extends React.Component {
  render() {
    return (
      <GameStatusContext.Provider value='intro'>
        <Nada />
      </GameStatusContext.Provider>
    )
  }
}

export default App;