import React from "react";
import check from "../../../assets/check.svg"
import error from "../../../assets/error.svg"
import info from "../../../assets/info.svg"
import warning from "../../../assets/warning.svg"

import "./Toast.css"

type toastClasses = "check" | "error" | "info" | "warning"

interface Props {
    class: toastClasses;
    title: string;
    description: string;
}

const icons = {check, error, info, warning};

export const Toast = (props: Props) => {

    return (
        <>
            <div className={`notification-container`}>
                <div className={`notification toast toast-${props.class}`}>
                    <button className="toast-button">
                        X
                    </button>
                    <div className="notification-image">
                        <img src={icons[props.class]} alt="icon"/>
                    </div>
                    <div>
                        <p className="notification-title">{props.title}</p>
                        <div className="notification-message">{props.description}</div>
                    </div>

                </div>
            </div>
        </>
    )
}