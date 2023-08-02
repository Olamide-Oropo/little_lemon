import React from "react";
import Img from "../assets/restauranfood.jpg"
import LitlleLemonBtn from "./LittleLemonBtn";

export default function HeroSection(){
    return(
        <>
            <section className="herosection">
                <article className="herosectioninfo">
                    <h2>Little Lemon</h2>
                    <h6>Chicago</h6>
                    <p>Proident veniam esse mollit cillum. Excepteur cupidatat ipsum ipsum quis nulla. Ut in nulla occaecat minim consequat officia enim magna.</p>
                    <LitlleLemonBtn text={"Reserve a Table"} anchor={"/bookings"}/>
                </article>
                <figure>
                    <img src={Img} alt="Hero section image"/>
                </figure>
            </section>
        </>
    )
}