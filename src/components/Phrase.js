import React, { useState } from 'react';
import quotes from './quotes.json'

const getRamdom = ()=>Math.floor(Math.random() * quotes.length)
const colors = ["#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#F9F871","#2C73D2","#0089BA","#ff0000","#00ff00","#000"]

const Phrase = () => {
    const color = colors[Math.floor(Math.random() * colors.length)]

    const [quote, setQuote] =  useState(quotes[getRamdom()])
    const changeQuote = ()=>{
        setQuote(quotes[getRamdom()])
    }

    document.body.style = `background: ${color}`
    return (
        <div className='phrase-container' style={{color: color}}>
            <i className="fa-solid fa-quote-left"></i>
            <p>{quote.quote}</p>
            <h2>{quote.author}</h2>
            <button onClick={changeQuote} style={{background: color}}><i className="fa-solid fa-shuffle"></i></button>
        </div>
    );
};

export default Phrase;