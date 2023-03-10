import React from "react";
import check from "../../../assets/check.svg"
import error from "../../../assets/error.svg"
import info from "../../../assets/info.svg"
import warning from "../../../assets/warning.svg"
import {ToastInfo} from "../../../types";

import "./Toast.css"


interface Props {
    details: ToastInfo
}

const icons = {check, error, info, warning};

export const Toast = (props: Props) => {

    return (
        <>
            <div className={`notification-container`}>
                <div className={`notification toast toast-${props.details.class}`}>
                    <button className="toast-button">
                        X
                    </button>
                    <div className="notification-image">
                        <img src={icons[props.details.class]} alt="icon"/>
                    </div>
                    <div>
                        <p className="notification-title">{props.details.title}</p>
                        <div className="notification-message">{props.details.description}</div>
                    </div>

                </div>
            </div>
        </>
    )
}