import React, {useEffect, useState} from 'react';
import './App.css';
import {MainView} from "./component/views/MainView";
import {Route, Routes} from "react-router-dom";
import {ApplyView} from "./component/views/ApplyView";
import {MapView} from "./component/views/MapView";
import {AuthUser, ToastInfo, ToastInfoWithID} from "./types";
import {ToastContext} from './Context/ToastContext';
import {v4 as uuid} from 'uuid'
import {Toast} from "./component/common/Toast/Toast";
import {AuthUserContext} from './Context/AuthUserContext';
import {checkCookies} from "./utils/API_account";

function App() {
    const [toast, setToast] = useState<ToastInfoWithID>({
        id: '',
        class: null,
        description: "",
        title: '',
    })
    const [user, setUser] = useState<AuthUser>({
        id: null,
        login: null,
    })

    const updateToast = (obj: ToastInfo) => {
        setToast(() => ({
            id: uuid(),
            ...obj
        }))
    }

    useEffect(() => {

        (async () => {
            const user: any = await checkCookies();
            if (user) {
                if (user.err) {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: `${user.err}`
                    })
                } else {
                    setUser(user);
                    updateToast({
                        class: "check",
                        title: "Witaj ponownie!",
                        description: `Jesteś zalogowany jako ${user.login}`
                    })
                }
            }
        })();

    }, [])

    return (
        <>
            <AuthUserContext.Provider value={{user, setUser}}>
                <ToastContext.Provider value={{toast, updateToast}}>
                    <Toast/>
                    <Routes>
                        <Route path="/" element={<MainView/>}/>
                        <Route path="/map" element={<MapView/>}/>
                        <Route path="/apply/:id" element={<ApplyView/>}/>
                        <Route path="*" element={<MainView/>}/>
                    </Routes>
                </ToastContext.Provider>
            </AuthUserContext.Provider>
        </>
  );
}

export default App;
