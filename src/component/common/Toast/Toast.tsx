import React,{useContext,useEffect,useState} from "react";
import check from "../../../assets/check.svg"
import error from "../../../assets/error.svg"
import info from "../../../assets/info.svg"
import warning from "../../../assets/warning.svg"
import {ToastInfoWithID} from "../../../types";

import "./Toast.css"
import {ToastContext} from "../../../Context/ToastContext";


const icons = {check, error, info, warning};

export const Toast = () => {
    const {
        toast,
        deleteToast
    } = useContext(ToastContext);
    const [details,setDetails] = useState<ToastInfoWithID[]>(toast);


    useEffect(() => {
        setDetails(toast)

        // setTimeout(() => {
        //     if (toast[0]) {
        //         deleteToast(toast[0].id)
        //     }
        // },8000)

    },[toast])


    return (
        <>
            <div className={`notification-container`}>
                {
                    details.map(e => {
                        if (e === undefined) {
                            return null
                        } else {
                            return (

                                <div
                                    className={`notification toast toast-${e.class}`}
                                    key={e.id}
                                >
                                    <button className="toast-button" onClick={() => deleteToast(e.id)}>
                                        X
                                    </button>
                                    <div className="notification-image-box">
                                        <img className="notification-image" src={icons[e.class]} alt="icon"/>
                                    </div>
                                    <div>
                                        <p className="notification-title">{e.title}</p>
                                        <div className="notification-message">{e.description}</div>
                                    </div>

                                </div>

                            )
                        }
                    })

                }
            </div>
        </>
    )
}