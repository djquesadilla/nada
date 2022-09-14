import React from "react";

class NadaCredits extends React.Component {
  render() {
    console.log(this.props)
    return <div className="nada-credits">
      <div className="story-text">You did nothing for {Math.floor((this.props.endTime - this.props.startTime) / 1000)} seconds.</div>
      <button className="nada-button" onClick={this.props.playAgain}>Play again</button>
    </div>
  }
}

export default NadaCredits;