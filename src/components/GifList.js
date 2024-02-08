import React from "react";

function GifList({items}){

    return(
        <ul>
            {items.map((item, index) => (
                <li key={index}><img src={item.images.original.url} alt="dolphins"/> </li>
            )
            )}
        </ul>
    )
}

export default GifList;