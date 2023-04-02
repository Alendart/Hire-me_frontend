import React,{useContext,useEffect,useState} from "react";
import logo from "../../Hire_me_logo.png";
import {BtnTemp} from "../common/Btn/BtnTemp";
import "./Header.css"
import {Modal} from "../common/Modal/Modal";
import {Btn} from "../common/Btn/Btn";
import {AccountPopup} from "../AccountPopup/AccountPopup";
import {AuthUserContext} from "../../Context/AuthUserContext";
import {JobFormik} from "../JobFormik/JobFormik";
import {ModalShowContext} from "../../Context/ModalShowContext";
import {MainRefreshContext} from "../../Context/MainRefreshContext";
import {NavLink} from "react-router-dom";


export const Header = () => {
    const {user} = useContext(AuthUserContext);
    const {updateModalData} = useContext(ModalShowContext);
    const {mainRefresh} = useContext(MainRefreshContext)
    const [userId,setUserId] = useState<string>('');

    useEffect(() => {
        if (user.id) {
            setUserId(user.id);
        }
    },[user,mainRefresh])

    return (
        <>
            <header className="header-image">
                <div className="header_content">
                    <NavLink to={'/'}><img src={logo} alt="logo"/></NavLink>
                    {
                        userId ?
                            <Btn class="job-add" name="Dodaj nową pracę" function={() => updateModalData("JobFormik")}/>
                            : null
                    }
                    <div className="button_div">

                        {
                            userId ?
                                <>
                                    <BtnTemp name="Zmiana widoku"/>
                                    <Btn class="account" name={`${user.login}`}
                                         function={() => updateModalData("AccountPopup")}/>
                                </>
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