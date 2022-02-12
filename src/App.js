import './App.css';
import { getRandomQuote } from './Quotes';
import { useState } from 'react';

const App = () => {

  const [ quote, setQuote ] = useState()

  const setRandomQuote = () => {

    setQuote(getRandomQuote())
  }


  return (
    <div className="App">
        <h1 className='heading-title'>RandomQuote</h1>
        <p class={!quote ? "toggleStyle": "notToggleStyle"}>A random quote generator designed to empower and inspire you with famous quotes from intelligent and well known scholars. <br />Anyday, Anytime</p>
        <br />
        <br />
        <p class={quote ? "generatedQuote" : ''}>{quote}</p>
        <button onClick={setRandomQuote} className="cta-button">Generate</button>
    </div>
  );
}

export default App;
