import React from 'react';
import BackgroundMusic from './BackgroundMusic';
import './Nada.css';

const story = ["First page of the book", "Second page of nada happening", "And third one is even Nadaer"]

class StoryText extends React.Component {
  render() {
    return <div className='story-text'>{this.props.storyText}</div>;
  }
}

class NadaStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { storyIndex: 0 };
    // This binding is necessary to make `this` work in the callback
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state)
    this.setState(
      prevState => ({
        storyIndex: prevState.storyIndex + 1
      }));
  }

  render() {
    console.log(this.state.storyIndex)
    return <div className='nada-story'>
    <StoryText storyText={story[this.state.storyIndex]}/>
    <button className="btn" onClick={this.handleClick}>Next</button>
  </div>;
  }
}

class Nada extends React.Component {
  render() {
    return <div className='nada'>
    <NadaStory />
    <BackgroundMusic />
    </div>
  }
}

export default Nada;
