import React from "react";
import Dream from './music/quest-joana-gama-luis-fernandes-dream.mp3'

class Music extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      play: false
    };

    this.audio = new Audio(Dream);
  }

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false}));
  }

  componentWillUnmount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false}));
  }
  
  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }
  
  render() {
    this.setState({ play: true });
    this.audio.play();

    return (
      <div></div>
    )
  }
}

export default Music;
