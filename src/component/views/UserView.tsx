import React,{useContext} from "react";
import {Header} from "../Header/Header";
import {Btn} from "../common/Btn/Btn";
import {logoutUser} from "../../utils/API_account";
import {AuthUserContext} from "../../Context/AuthUserContext";
import {useNavigate} from "react-router-dom";
import {ToastContext} from "../../Context/ToastContext";


export const UserView = () => {
    const {setUser} = useContext(AuthUserContext);
    const {updateToast} = useContext(ToastContext);
    const navigate = useNavigate();

    const handleClick = async () => {
        const res = await logoutUser();
        if (res === true) {
            setUser({
                id: null,
                login: null,
            });
            navigate('/home');
            updateToast({
                class: "check",
                title: "Wylogowano",
                description: "Poprawnie wylogowano z serwisu"
            })
        } else {
            updateToast({
                class: "error",
                title: "Błąd",
                description: "Nie można wylogować ze względu na wewnętrzny błąd serwisu"
            })
        }

    }

    return (
        <>
            <Header/>
            <div className="app_body">
                <p>Widok konta użytkownika, Nic tu jeszcze nie ma....</p>
                <p>Oprócz...</p>
                <Btn name="Wyloguj" class="logout" function={() => handleClick()}/>
            </div>

        </>
    )
}