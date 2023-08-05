import React,{useState,useEffect,useReducer} from "react";
import useActive from "../hooks/useActive";
import BookingForm from "../Components/BookingForm";
import Logo from "../assets/Logo .svg";
import useSmallViewport from "../hooks/useSmallViewport"
import LitlleLemonBtn from "../Components/LittleLemonBtn";
import "../styles/reservation.css"

export default function Reservation(){
    const isSmallViewport = useSmallViewport(950)
    const alt = "Navigation Brand"
    const updateTimes = (state,action) => {
        if(action.type === "Base"){
        return state
        }
    }
    useActive("Reservation")
    const initializeTimes = () => {
        return ["17.00","18.00","19.00","20.00","21.00","22.00"]
    }
    const [avaliableTimes,dispacth] = useReducer(updateTimes,initializeTimes())
    const [date,setDate] = useState()
    useEffect(() => {
        document.title = "Reserve a table in little lemon"
    },[date])
    return(
        <>
            <header className="bookingheader">
                <img src={Logo} alt={alt} aria-label={alt}/>
            </header>
            <main>
                <section className='bookingmain'>
                    <BookingForm avaliableTimes={avaliableTimes} dispacth={dispacth} setDate={setDate} />
                    {
                        !isSmallViewport &&
                        <section className="formImg">
                            <LitlleLemonBtn text="Home" anchor={"/"}/>
                        </section>
                    }
                </section>
            </main>
        </>
    )
}