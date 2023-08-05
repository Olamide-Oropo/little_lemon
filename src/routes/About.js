import React from "react";
import Header from "../Components/Header";
import useActive from "../hooks/useActive";

export default function About(){
    useActive("About")
    return(
        <>
         <header>
            <Header />
         </header>
        </>
    )
}