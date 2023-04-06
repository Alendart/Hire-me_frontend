import React,{useContext,useEffect,useState} from "react";
import logo from "../../Hire_me_logo.png";
import mapIcon from "../../map-icon.png";
import listIcon from "../../list-icon.png";
import "./Header.css"
import {Modal} from "../common/Modal/Modal";
import {Btn} from "../common/Btn/Btn";
import {AccountPopup} from "../AccountPopup/AccountPopup";
import {AuthUserContext} from "../../Context/AuthUserContext";
import {JobFormik} from "../JobFormik/JobFormik";
import {ModalShowContext} from "../../Context/ModalShowContext";
import {RefreshContext} from "../../Context/RefreshContext";
import {NavLink,useLocation} from "react-router-dom";


export const Header = () => {
    const {user} = useContext(AuthUserContext);
    const {updateModalData} = useContext(ModalShowContext);
    const {refresh} = useContext(RefreshContext)
    const [userId,setUserId] = useState<string>('');
    const location = useLocation();

    useEffect(() => {
        if (user.id) {
            setUserId(user.id);
        }
    },[user,refresh])

    return (
        <>
            <header className="header-image">
                <div className="header_content">
                    {
                        userId ?
                            <>
                                <NavLink to={'/'}><img className="img-logo" src={logo} alt="logo"/></NavLink>
                                <Btn class="job-add" name="Dodaj nową pracę"
                                     function={() => updateModalData("JobFormik")}/>
                            </>
                            :
                            <img src={logo} alt="logo"/>
                    }
                    <div className="button_div">

                        {
                            userId ?
                                <>
                                    <div className="btn btn-map-view">
                                        <NavLink to={location.pathname === "/map" ? '/' : '/map'}>
                                            <img
                                                src={
                                                    location.pathname === "/map" ? listIcon : mapIcon
                                                }
                                                alt="Map Icon"
                                                className="map-icon"
                                            />
                                        </NavLink>
                                    </div>
                                    <NavLink to="/user">
                                        <Btn class="account" name={`${user.login}`} function={() => null}/>
                                    </NavLink>
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