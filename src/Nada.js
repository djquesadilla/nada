import './Nada.css';

const story = ["First page of the book", "Second page of nada happening", "And third one is even Nadaer"]

function StoryText() {
  return (
    <div className='story-text'>{story[0]}</div>
  )
}

function NextButton() {
  return  (
    <button class="btn">Next</button>
  )
}

function Nada() {
  return (
    <div className="Nada">
      <StoryText />
      <NextButton />
    </div>
    
  );
}

export default Nada;
