import React,{useContext,useEffect,useState} from "react";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";
import {MainRefreshContext} from "../../Context/MainRefreshContext";
import {AuthUserContext} from "../../Context/AuthUserContext";
import {useNavigate} from "react-router-dom";

export const MainView = () => {
    const [mainRefresh,setMainRefresh] = useState<boolean>(false);
    const navigate = useNavigate()
    const {user} = useContext(AuthUserContext);

    useEffect(() => {
        if (user.id === null) {
            navigate('/')
        }

    },[])

    const updateMainRefresh = () => {
        setMainRefresh(prev => !prev)
    }

    return (
        <>
            <MainRefreshContext.Provider value={{
                mainRefresh,
                updateMainRefresh,
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </MainRefreshContext.Provider>
        </>
    )
}
