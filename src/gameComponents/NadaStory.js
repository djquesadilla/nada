import React from 'react';
import story from '../story/story';

class StoryText extends React.Component {
  render() {
    return <div className={this.props.fadeOut ? 'story-text fade-out-text': 'story-text fade-in-text'}>{this.props.storyText}</div>;
  }
}

class NadaStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      storyIndex: 0,
      fadeOut: false,
      ready: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // set timer of 10 seconds for:
    // * fade-out / disable button
    // * fade-in / enable button again

    this.setState(
      prevState => ({
        fadeOut: true,
        ready: false
      }));

    setTimeout(() => {
      this.setState(
        prevState => ({
          storyIndex: prevState.storyIndex + 1,
          fadeOut: false
        })
      )
    }, 5000)

    setTimeout(() => {
      this.setState(
        prevState => ({
          ready: true
        })
      )
    }, 8000)
  }

  render() {
    return <div className='nada-story'>
      <StoryText storyText={story[this.state.storyIndex]} fadeOut={this.state.fadeOut} />
      <button className="nada-button" disabled={this.state.ready ? false : true} onClick={this.handleClick}>Next</button>
    </div>;
  }
}

export default NadaStory;