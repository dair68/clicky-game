import React from "react";
import Image from "./Image";

//the component containing the clickable images
function ImageContainer(props) {
    const images = props.images;

    return (
        <div className="container">
        {
            props.imageOrder.map(index =>
                <Image
                    key={images[index].id}
                    id={images[index].id}
                    url={images[index].url}
                    name={images[index].name}
                    handler={props.imageHandler}
                />)
        }
        </div>
    )
}

export default ImageContainer;