import React from "react";

import * as Component from "../styles/components/PhotoItem";
import { Photo } from "../types/Photo";

const PhotoItem = ({ name, url }:Photo)=>{
    return(
        <Component.Container>
            <img src={url} alt={name} />
            {name}
        </Component.Container>
    );
}

export default PhotoItem;