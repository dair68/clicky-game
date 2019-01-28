import React from "react";

//clickable image component
function Image(props) {
    return (
        <img src={props.url} alt={props.name} onClick={() => props.handler(props.id)}/>
    )
}

export default Image;