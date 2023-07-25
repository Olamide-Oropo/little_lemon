import React from "react";
import Logo from "../assets/Logo .svg"

export default function Header(){
    const navItem = ["Home","About","Menu","Reservation","Order Online","Login"]
    const alt = "Navigation Brand"
    return(
        <>
            <nav>
                <img src={Logo} alt={alt} aria-label={alt}/>
                <ul>
                    {navItem.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </nav>
        </>
    )
}