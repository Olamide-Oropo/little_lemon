import React from "react";
import Image1 from "../assets/Mario and Adrian A.jpg"
import Image2 from "../assets/restaurant.jpg"

export default function Chicago(){
    return(
        <section className="chicago" id="chicago">
            <h2 className="chicagoheader">About Little Lemon</h2>
            <section className="chicagomain">
                <article className="chicagotext">
                        <h2>Little Lemon</h2>
                        <h6>Chicago</h6>
                        <p>
                            Lorem aute irure exercitation velit elit cillum sunt sunt. Anim esse adipisicing ullamco sit Lorem fugiat culpa. Nulla officia sunt id ea ut proident nisi aliquip mollit. Sint minim est aliquip elit adipisicing nisi id amet in laboris. Anim magna in mollit velit enim do cupidatat eu nostrud et exercitation nulla.
                        </p>
                        <p>
                            Occaecat pariatur adipisicing do ullamco labore veniam do mollit cupidatat tempor ex. Ullamco non id proident dolore irure aliqua do velit dolore. Dolore ipsum ea labore consectetur exercitation irure adipisicing voluptate enim qui voluptate. Ullamco ea sint et adipisicing.
                        </p>
                </article>
                <figure>
                    <img src={Image2} alt="About little lemon image" width={"400px"}/>
                    <img src={Image1} alt="About little lemon image" width={"400px"}/>
                </figure>
            </section>
        </section>
    )
}