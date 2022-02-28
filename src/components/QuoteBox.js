import React, { useState } from 'react';
import quotes from './quotes.json'
import getRandom from './getRandom';
import colors from './colors';

const QuoteBox = () => {
    const color = colors[getRandom(colors)]
    document.body.style = `background: ${color}`

    const [quote, setQuote] =  useState(quotes[getRandom(quotes)])
    const changeQuote = ()=>{
        setQuote(quotes[getRandom(quotes)])
    }

    return (
        <div className='phrase-container' style={{color: color}}>
            <i className="fa-solid fa-quote-left"></i>
            <p>{quote.quote}</p>
            <h3>{quote.author}</h3>
            <button onClick={changeQuote} style={{background: color}}><i className="fa-solid fa-shuffle"></i></button>
        </div>
    );
};

export default QuoteBox;