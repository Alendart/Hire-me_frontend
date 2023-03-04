import React, {useState} from "react";
import logo from "./Hire_me_logo.png";
import {BtnTemp} from "../common/Btn/BtnTemp";

import "./Header.css"
import {Modal} from "../common/Modal/Modal";
import {Btn} from "../common/Btn/Btn";
import {LoginForm} from "../LoginForm/LoginForm";


export const Header = () => {
    const [login, setLogin] = useState(false);

    const loginModalClose = () => {
        setLogin(false)
    }

    const loginModalOpen = () => {
        setLogin(true)
    }

    return (
        <>
            <header className="header-image">
                <div className="header_content">
                    <img src={logo} alt="logo"/>
                    <BtnTemp name="Dodaj nową firmę"/>
                    <div className="button_div">
                        <BtnTemp name="Zmiana widoku"/>
                        <Btn name="Konto" function={loginModalOpen}/>
                    </div>
                </div>
                <>
                    <Modal text="Zaloguj się!" class="login" show={login} handleClose={loginModalClose}>
                        <LoginForm/>
                    </Modal>
                </>
            </header>
        </>
    )
}