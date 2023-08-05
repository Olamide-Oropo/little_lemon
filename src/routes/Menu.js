import React,{useEffect} from "react";
import useActive from "../hooks/useActive";
import Header from "../Components/Header";

export default function Menu(){
    useActive("Menu")
    return(
        <>
         <header>
            <Header />
         </header>
        </>
    )
}