import React from "react";
import Highlight from "./Highlight";
import LitlleLemonBtn from "./LittleLemonBtn";
import GreekSalad from "../assets/greek salad.jpg"
import LemonDessert from "../assets/lemon dessert.jpg";
import Bruccheta from "../assets/busrcceta.png";


export default function HighlightSection(){
    const data = [{
        img:GreekSalad,
        title:"Greek Salad",
        price:"$12.99"
    },{
        img:LemonDessert,
        title:"Lemon Dessert",
        price:"$6.00"
    },{
        img:Bruccheta,
        title:"Bruccheta",
        price:"$5.99"
    }]
    return(
        <>
            <section className="highlights">
                <section className="highlightsheader">
                    <h4>This Weeks Specials!</h4>
                    <LitlleLemonBtn text={"Online Menu"}/>
                </section>
                <section className="highlightsmain">
                    {data.map((item,index) => (
                        <Highlight img={item.img} price={item.price} title={item.title} key={`${item.title} ${index}`}/>
                    ))}
                </section>
            </section>
        </>
    )
}