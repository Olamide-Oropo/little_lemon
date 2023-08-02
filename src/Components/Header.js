import React from "react";
import Logo from "../assets/Logo .svg";
import { Link } from "react-router-dom";
import ActiveLinkContext from "../context/ActiveLinkContext";

export default function Header(){
    const [active,setActive] = React.useContext(ActiveLinkContext)
    const navItem = [
        {
            name:"Home",
            anchor:"/"
        },
        {
            name:"About",
            anchor:"#chicago"
        },
        {
            name:"Menu",
            anchor:"/menu"
        },
        {
            name:"Reservation",
            anchor:"/bookings"
        },
        {
            name:"Order Online",
            anchor:"/bookings"
        },
        {
            name:"Login",
            anchor:"/login"
        },
    ]
    const alt = "Navigation Brand"
    const handleClick = ({name,anchor}) => {
        const el = document.querySelector(anchor)
        if(el){
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setActive(name)
        }
    }
    return(
        <>
            <img src={Logo} alt={alt} aria-label={alt}/>
            <nav>
                <ul>
                    {navItem.map((item,index) => {
                        if(index === 1){
                            return(
                                <li key={index} onClick={() => handleClick(item)}>
                                    <Link to={item.anchor} className={active === item.name? "activelink":""}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }else{
                            return(
                                <li key={index}>
                                    <Link to={item.anchor} className={active === item.name? "activelink":""}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </ul>
            </nav>
        </>
    )
}