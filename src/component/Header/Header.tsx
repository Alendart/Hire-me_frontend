import React,{useContext} from "react";
import logo from "../../Hire_me_logo.png";
import {BtnTemp} from "../common/Btn/BtnTemp";
import "./Header.css"
import {Modal} from "../common/Modal/Modal";
import {Btn} from "../common/Btn/Btn";
import {AccountPopup} from "../AccountPopup/AccountPopup";
import {AuthUserContext} from "../../Context/AuthUserContext";
import {JobFormik} from "../JobFormik/JobFormik";
import {ModalShowContext} from "../../Context/ModalShowContext";


export const Header = () => {
    const {user} = useContext(AuthUserContext);
    const {updateModalData} = useContext(ModalShowContext);

    return (
        <>
            <header className="header-image">
                <div className="header_content">
                    <img src={logo} alt="logo"/>
                    <Btn class="job-add" name="Dodaj nową pracę" function={() => updateModalData("JobFormik")}/>
                    <div className="button_div">
                        <BtnTemp name="Zmiana widoku"/>
                        {
                            user.id ?
                                <Btn class="account" name={`${user.login}`}
                                     function={() => updateModalData("AccountPopup")}/>
                                :
                                <Btn class="account" name="Konto" function={() => updateModalData("AccountPopup")}/>
                        }
                    </div>
                </div>
                <>
                    <Modal
                        id="AccountPopup"
                        text="Konto użytkownika"
                        class="login"
                    >
                        <AccountPopup/>
                    </Modal>
                    <Modal
                        id="JobFormik"
                        text="Dodawanie nowej aplikacji o pracę"
                        class="job"
                    >
                        <JobFormik/>
                    </Modal>
                </>
            </header>
        </>
    )
}