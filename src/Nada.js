import React from 'react';
import BackgroundMusic from './BackgroundMusic';
import './Nada.css';

const story = [
  "Este é o homem invisível. Pinta-o de transparente.",
  "Esta página tem um fantasma. Consegues vê-lo? Pinta-o de nenhuma cor.",
  "Isto é o interior de um balão. Usa a cor do ar para a colorir.",
  "Aqui está o infinito. Preenche-o.",
  "Isto é uma menitra. Finge que a estás a pintar.",
  "Isto é um buraco. Enche-o de coisa nenhuma.",
  "Este é o teu amigo imaginário. Pinta-o de uma cor que só tu consegues ver.",
  "Aqui está o silêncio. Usa uma cor muda para o preencher.",
  "O copo está meio cheio. Pinta esta metade vazia.",
  "Estas páginas estão cheias de amor. Pinta-as da cor que quiseres, mas pinta-as atá ao fim. Ninguém disse que ia ser fácil.",
  "Isto é um número multiplicado por zero. Usa uma caneta vazia para o preencher.",
  "Isto é uma coisa de que não te lembras. Pinta-a de uma cor que não consigas ver.",
  "Dois homens estão a transportar este vidro de uma janela para o outro lado da rua. Pinta o vidro da cor do vidro.",
  "Estes são os últimos segundos antes do big bang. Usa tinta de vácuo para os colorir.",
  "Isto é uma série de medos infundados. Podes colori-los como quiseres, mas se pintares fora das linhas esses medos tornam-se reais.",
  "Nesta página está um camuflado para a neve. Pinta-o, mas só se tiveres a certeza de que não nenhum urso polar por perto.",
  "Isto é aquilo que tu eras antes de nasceres. Pinta com a cor daquilo que vais ser quando deixares de existir.",
  "Nesta página está um camaleão. Um camaleão muito bom, completamente camuflado. Pinta-o da cor que o rodeia.",
];

class StoryText extends React.Component {
  render() {
    return <div className='story-text'>{this.props.storyText}</div>;
  }
}

class NadaStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      storyIndex: 0,
      fadeOut: false
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
        fadeOut: true
      }));

    setTimeout(() => {
      this.setState(
        prevState => ({
          storyIndex: prevState.storyIndex + 1,
          fadeOut: false
        })
      )
    }, 5000)
  }

  render() {
    console.log(this.state.storyIndex)
    return <div className={this.state.fadeOut ? 'fade-out-text': 'fade-in-text'}>
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
    </div>;
  }
}

export default Nada;
