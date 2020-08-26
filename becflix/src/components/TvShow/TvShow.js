import React from "react";
import Col from "react-bootstrap/Col";

import showImage from '../../img/logo.png';

let image ={
    src:showImage,
    alt:'les invisibles',
    title: 'Les invicibles'
}

export class TvShow extends React.Component{
render (){
    return(
        <col xs lg="2">
            <img src={image.src}
            alt={image.alt}
            title={image.title}
            className='img-fluid'
            />
        </col>
    );
}

}