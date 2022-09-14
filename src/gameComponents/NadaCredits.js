import React from "react";

class NadaCredits extends React.Component {
  render() {
    return <div className="nada-credits">
      <div className="story-text">CREDITS</div>
      <button className="nada-button" onClick={this.props.playAgain}>Play again</button>
    </div>
  }
}

export default NadaCredits;