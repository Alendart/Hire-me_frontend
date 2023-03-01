import React, {useState} from "react";

import "./Main.css"
import {applicationStatus, CompanyBasicData} from "../../types";
import {CompanyListTable} from "../CompanyListTable/CompanyListTable";
import {Modal} from "../common/Modal/Modal";


const companyList: CompanyBasicData[] = [
    {
        id: "Sdaklopkxaklmdw;qd",
        name: "Wyższa szkoła marketingu",
        status: applicationStatus.Waiting,
    },
    {
        id: "Sdaklsdad1213opkxaklmdw;qd",
        name: "Szkoła baletu",
        status: applicationStatus.Send,
    },
    {
        id: "Sdad1213opkxaklmdw;qd",
        name: "Poważna praca xD",
        status: applicationStatus.Appointment,
    },
    {
        id: "Sdaklsdad144354566dw;qd",
        name: "Janusz.exe",
        status: applicationStatus.Refused,
    },
    {
        id: "Sdaklsdad1443123124566dw;qd",
        name: "Śmiech i łzy",
        status: applicationStatus.Accepted,
    },
];


export const Main = () => {
    const [login, setLogin] = useState(false);

    const loginModalClose = () => {
        setLogin(false)
    }

    const loginModalOpen = () => {
        setLogin(true)
    }

    return (
        <>
            <div className="app_body">
                <h2>Firmy do których wysłano CV:</h2>
                <CompanyListTable list={companyList}/>
                <button onClick={loginModalOpen}>Modal</button>
                <Modal class="login" show={login} handleClose={loginModalClose} content={"Dane do logowania tutaj"}/>
            </div>
        </>
    )

}