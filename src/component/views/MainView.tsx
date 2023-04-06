import React,{useContext,useEffect} from "react";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";
import {AuthUserContext} from "../../Context/AuthUserContext";
import {useNavigate} from "react-router-dom";

export const MainView = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthUserContext);

    useEffect(() => {
        if (user.id === null) {
            navigate('/')
        }

    },[])


    return (
        <>
                <Header/>
                <Main/>
                <Footer/>
        </>
    )
}
