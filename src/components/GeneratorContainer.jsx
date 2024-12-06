import React, {useState, useEffect} from "react";

import QuoteContainer from "./QuoteContainer";
import Button from './Button'
import movieQuotes from "../assets/quotes";

const buttonDarkStyle = {
    background: 'darkblue',
    color: 'white'
}
const buttonLightStyle = {
    background: 'white',
    color: 'darkblue'
}

function GeneratorContainer() {
    const [buttonStyleState, setButtonStyleState] = useState(buttonDarkStyle)
    const [movieQuoteIndex, setMovieQuoteIndex] = useState()
    const [movieQuote, setMovieQuote] = useState({
        quote: '', 
        title: '',
        year: null
    })
    useEffect(() => {
        if (movieQuoteIndex >= 0) {
            const selection = movieQuotes[movieQuoteIndex]
            setMovieQuote({
                quote: selection.quote,
                title: selection.title,
                year: selection.year
            })
        }
    }, [movieQuoteIndex])

    const clickHandler = () => {
        const generatedIndex = Math.floor(Math.random() * movieQuotes.length)
        setMovieQuoteIndex(generatedIndex)
    }

    const mouseDownHandler = () => {
        setButtonStyleState(buttonLightStyle)
    }

    const mouseUpHandler = () => {
        setButtonStyleState(buttonDarkStyle)
    }

    return (
        <main className='generator-container'>
            <QuoteContainer quote={movieQuote.quote} movie={movieQuote.title} year={movieQuote.year} />
            <Button onClick={clickHandler} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} style={buttonStyleState} />
        </main>
    )
}

export default GeneratorContainer