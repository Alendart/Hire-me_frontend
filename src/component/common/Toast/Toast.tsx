import React, {useContext, useEffect, useState} from "react";
import check from "../../../assets/check.svg"
import error from "../../../assets/error.svg"
import info from "../../../assets/info.svg"
import warning from "../../../assets/warning.svg"
import {ToastInfoWithID} from "../../../types";

import "./Toast.css"
import {ToastContext} from "../../../Context/ToastContext";


const icons = {check, error, info, warning};

export const Toast = () => {
    const {toast} = useContext(ToastContext);
    const [details, setDetails] = useState<ToastInfoWithID>(toast);
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        setShow(true);
        setDetails(toast)

        setTimeout(() => {
            setShow(false);
        }, 8000)

    }, [toast])


    if (details.class === null) {
        return null
    }

    return (
        <>
            {
                show ?
                    <div className={`notification-container`}>
                        <div className={`notification toast toast-${details.class}`}>
                            <button className="toast-button" onClick={() => setShow(false)}>
                                X
                            </button>
                            <div className="notification-image">
                                <img src={icons[details.class]} alt="icon"/>
                            </div>
                            <div>
                                <p className="notification-title">{details.title}</p>
                                <div className="notification-message">{details.description}</div>
                            </div>

                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}