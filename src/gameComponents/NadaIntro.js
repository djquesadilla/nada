import React from "react";

class NadaIntro extends React.Component {
  render() {
    return <div className="nada-intro">
      <div className="nada-intro-text story-text">NADA</div>
      <button className="nada-button" onClick={this.props.startPlaying}>Start playing</button>
    </div>
  }
}

export default NadaIntro;