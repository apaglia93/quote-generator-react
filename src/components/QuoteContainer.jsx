import React from 'react'

function QuoteContainer() {
    return (
        <div className="quote-container">
            <p id="quote">Press the button to generate a random movie quote!</p>
            <div id="reference-container">
                <p className="dash">- </p>
                <p id="movie"></p>
                <p className="comma">, </p>
                <p id="year"></p>
            </div>
        </div>
    )
}

export default QuoteContainer