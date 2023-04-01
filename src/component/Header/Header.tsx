import React,{useContext,useState} from "react";
import logo from "../../Hire_me_logo.png";
import {BtnTemp} from "../common/Btn/BtnTemp";
import "./Header.css"
import {Modal} from "../common/Modal/Modal";
import {Btn} from "../common/Btn/Btn";
import {AccountPopup} from "../AccountPopup/AccountPopup";
import {AuthUserContext} from "../../Context/AuthUserContext";
import {JobFormik} from "../JobFormik/JobFormik";


export const Header = () => {
    const [login, setLogin] = useState(false);
    const [jobAdd, setJobAdd] = useState(false)
    const {user} = useContext(AuthUserContext)

    const loginModalClose = () => setLogin(false)

    const loginModalOpen = () => setLogin(true)

    const jobModalOpen = () => setJobAdd(true);

    const jobModalClose = () => setJobAdd(false);

    return (
        <>
            <header className="header-image">
                <div className="header_content">
                    <img src={logo} alt="logo"/>
                    <Btn class="job-add" name="Dodaj nową pracę" function={jobModalOpen}/>
                    <div className="button_div">
                        <BtnTemp name="Zmiana widoku"/>
                        {
                            user.id ?
                                <Btn class="account" name={`${user.login}`} function={loginModalOpen}/>
                                :
                                <Btn class="account" name="Konto" function={loginModalOpen}/>
                        }
                    </div>
                </div>
                <>
                    <Modal
                        text="Konto użytkownika"
                        class="login"
                        show={login}
                        handleClose={loginModalClose}
                    >
                        <AccountPopup/>
                    </Modal>
                    <Modal
                        text="Dodawanie nowej aplikacji o pracę"
                        class="job"
                        show={jobAdd}
                        handleClose={jobModalClose}
                    >
                        <JobFormik/>
                    </Modal>
                </>
            </header>
        </>
    )
}