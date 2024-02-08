import React, { useState } from "react";


function GifSearch({onFormSubmit}){


    const [formData, setFormData] = useState({
        searchName:""
    });

    
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    function handleSubmit(e){
        e.preventDefault();
        onFormSubmit(formData);
    }


    return(
        <>
        <form onSubmit={handleSubmit}  
        style={{  
            display: "block", width: "25%" 
          }}>
            <label htmlFor="searchName">Enter a search term</label>
            <input id="searchName" type="text" name="searchName" value={formData.dolphin} onChange={handleChange}/>
            <input type="submit" value="Find Gif" onSubmit={handleSubmit} />
        </form>
        </>
    )
}

export default GifSearch;