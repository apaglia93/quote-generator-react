import React from "react";

import QuoteContainer from "./QuoteContainer";
import Button from './Button'


function GeneratorContainer() {
    return (
        <main className='generator-container'>
            <QuoteContainer />
            <Button />
        </main>
    )
}

export default GeneratorContainer