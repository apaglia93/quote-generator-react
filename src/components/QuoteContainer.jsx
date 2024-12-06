import React from 'react'

function QuoteContainer({quote, movie, year}) {
    return (
        <div className="quote-container">
            <p id="quote">{quote === '' ? 'Press the button to generate a random movie quote!' : quote}</p>
            <div id="reference-container">
                <p>{movie === '' || !year ? '' : `- ${movie}, ${year}`}</p>
            </div>
        </div>
    )
}

export default QuoteContainer