import React from "react";

function Button(props) {
    return <button id="generator-btn" onClick={props.onClick} onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp} style={props.style} >Generate</button>
}

export default Button