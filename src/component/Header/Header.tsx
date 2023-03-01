import React from "react";
import logo from "./Hire_me_logo.png";
import {Btn} from "../common/Btn/Btn";

import "./Header.css"


export const Header = () => {


    return (
        <>
            <header className="header-image">
                <div className="header_content">
                    <img src={logo} alt="logo"/>
                    <Btn name="Dodaj nową firmę"/>
                    <div className="button_div">
                        <Btn name="Zmiana widoku"/>
                        <Btn name="Konto"/>
                    </div>
                </div>
            </header>
        </>
    )
}