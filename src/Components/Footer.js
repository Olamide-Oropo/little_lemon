import React from "react";
import useActive from "../hooks/useActive";
import "../styles/footer.css"

export default function Footer(){
    return(
        <>
            <section>
                <strong>Little Lemon</strong>
            </section>
            <span className="footerline"></span>
            <section>
                <p>
                    &copy; Little Lemon 2023 All rights reserved
                </p>
            </section>
        </>
    )
}