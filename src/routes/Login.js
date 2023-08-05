import React from "react";
import Header from "../Components/Header";
import useActive from "../hooks/useActive";

export default function Login(){
    useActive("Login")
    return(
        <>
         <header>
            <Header />
         </header>
        </>
    )
}