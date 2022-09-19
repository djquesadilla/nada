import React from "react";

class NadaCredits extends React.Component {
  render() {
    console.log(this.props)
    return <div className="nada-credits">
      <div className="story-text">You did nothing for {Math.floor((this.props.endTime - this.props.startTime) / 1000)} seconds.</div>
      <div className="credits-text">Inspired in a <a href="https://shop.lavandaria.net/product/nada-um-livro-para-colorir-coisa-nenhuma-luis-leal-miranda-ed-livraria-plutao-hihihi">Luis Leal Miranda book</a>.</div>
      <div className="credits-text">Music by <a href="https://shhpuma.bandcamp.com/track/dream">Joana Gama & Luis Fernandes</a>.</div>
      <button className="nada-button" onClick={this.props.playAgain}>Play again</button>
    </div>
  }
}

export default NadaCredits;