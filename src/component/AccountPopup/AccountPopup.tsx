import React, {useState} from "react";
import {LoginFormik} from "../LoginFormik/LoginFormik";
import {CreateFormik} from "../CreateFormik/CreateFormik";

import "./AccountPopup.css"


export const AccountPopup = () => {
    const [change, setChange] = useState(true)

    const changeHandler = () => {
        setChange(!change)
    }

    return (
        <>
            {change ?
                <LoginFormik handler={changeHandler}/>
                :
                <CreateFormik handler={changeHandler}/>
            }
        </>
    )
}

