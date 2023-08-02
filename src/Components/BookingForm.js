import React, { useState } from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import LitlleLemonBtn from "./LittleLemonBtn";
import Logo from "../assets/Logo .svg";

export default function BookingForm({avaliableTimes,dispatch,setDate}){
    const [isDisabled,setIsDisabled] = useState(true)
    const alt = "Navigation Brand"
    const formik = useFormik({
        initialValues:{
            date:"",
            time:avaliableTimes[0],
            guest:1,
            occasion:"Birthday"
        },
        validationSchema: Yup.object({
            date:Yup.date("Enter a valid date"),
            time:Yup.string(),
            guest:Yup.number().min(1,"Must be more than 1").max(10,"Must be less than 11"),
            occasion:Yup.string()
        })
    })
    React.useEffect(() => {
        setDate(formik.values.date);
        setIsDisabled(!formik.isValid)
    },[formik.values])
    return(
        <>
            <section className="bookingform">
                <img src={Logo} alt={alt} aria-label={alt}/>
                <h2>Reserve a Table</h2>
                <p>Please fill this form to reserve a table</p>
                <form style={{display:"grid",minWidth:"400px",gap:"10px"}}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} />
                    {!formik.isValid? <p className="errormsg">{formik.errors.date}</p>:null}
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" name="time" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.time}>
                        {avaliableTimes.map((item,i) => (
                            <option key={item + i}>{item}</option>
                        ))}
                    </select>
                    <label htmlFor="guest">Number of guests</label>
                    <input id="guest" type="number" name="guest" min="1" max="10" placeholder="1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.guest}/>
                    {!formik.isValid? <p className="errormsg">{formik.errors.guest}</p>:null}
                    <label htmlFor="occasion">Select occasion</label>
                    <select id="occasion" name="occasion" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.occasion}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <button type="submit" aria-label="on Click" disabled={isDisabled}>Make your Reservation</button>
                </form>
            </section>
            <section className="formImg">
                <LitlleLemonBtn text="Home" anchor={"/"}/>
            </section>
        </>
    )
}