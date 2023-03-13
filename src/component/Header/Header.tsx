import React, {useContext, useState} from "react";
import logo from "./Hire_me_logo.png";
import {BtnTemp} from "../common/Btn/BtnTemp";
import "./Header.css"
import {Modal} from "../common/Modal/Modal";
import {Btn} from "../common/Btn/Btn";
import {AccountPopup} from "../AccountPopup/AccountPopup";
import {AuthUserContext} from "../../Context/AuthUserContext";


export const Header = () => {
    const [login, setLogin] = useState(false);
    const {user} = useContext(AuthUserContext)

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
                        {
                            user.id ?
                                <Btn name={`${user.login}`} function={loginModalOpen}/>
                                :
                                <Btn name="Konto" function={loginModalOpen}/>
                        }
                    </div>
                </div>
                <>
                    <Modal text="Konto użytkownika" class="login" show={login} handleClose={loginModalClose}>
                        <AccountPopup/>
                    </Modal>
                </>
            </header>
        </>
    )
}