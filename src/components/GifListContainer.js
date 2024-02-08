import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer(){

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("dolphin")
    const [isLoading, setIsLoading] = useState(true);

    // callback passed to submission form
    function onFormSubmit(formData){
        setSearch(formData.searchName)
    }

    // perform search using search name whenever search state is set
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=coEk9cHfBc2ZgHwJUw57dzvgtz4VliVF&rating=g`)
        .then((resp)=> resp.json())
        .then((result)=> {
            setItems(result.data.slice(0,3));
            setIsLoading(false)});
    }, 
    [search]); // will fetch data everytime search name changes
    

    return(
        <div style={{  
            display: "grid",  
            gridTemplateColumns: "3fr 1fr"  
          }}>
        
        {isLoading ? <p>Loading...</p> : null } {/* Loading data message */}
        <GifList items={items}/>
        <GifSearch onFormSubmit={onFormSubmit}/>
        </div>
    )
}

export default GifListContainer;