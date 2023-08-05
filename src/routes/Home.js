import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import HighlightSection from "../Components/HighlightSection";
import CustomerSay from "../Components/CustomerSay";
import Chicago from "../Components/Chicago";
import Footer from "../Components/Footer";
import useActive from "../hooks/useActive";

export default function Home(){
    useActive("Home");
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <HeroSection />
                <HighlightSection />
                <CustomerSay />
                <Chicago />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}