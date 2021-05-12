import React from "react";
import Hero from "./Hero";


const SeachView = ({keyword, searchResults}) => {
  const title = `You are searching for: ${keyword}`


    return (
        <>
            <Hero text={title}/>



        </>

    )
}

export default SeachView;