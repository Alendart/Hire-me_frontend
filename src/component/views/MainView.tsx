import React,{useState} from "react";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";
import {MainRefreshContext} from "../../Context/MainRefreshContext";

export const MainView = () => {
    const [mainRefresh,setMainRefresh] = useState<boolean>(false);

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
