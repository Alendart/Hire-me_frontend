import React,{useEffect,useState} from 'react';
import './App.css';
import {MainView} from "./component/views/MainView";
import {Route,Routes,useNavigate} from "react-router-dom";
import {ApplyView} from "./component/views/ApplyView";
import {MapView} from "./component/views/MapView";
import {AuthUser,ToastInfo,ToastInfoWithID} from "./types";
import {ToastContext} from './Context/ToastContext';
import {v4 as uuid} from 'uuid'
import {Toast} from "./component/common/Toast/Toast";
import {AuthUserContext} from './Context/AuthUserContext';
import {checkCookies} from "./utils/API_account";
import {ArchiveView} from "./component/views/ArchiveView";
import {HomeView} from "./component/views/HomeView";
import {ModalShowContext} from './Context/ModalShowContext';
import {ModalData} from "./types/modal.context.types";
import {UserView} from "./component/views/UserView";

export function App() {
    const [toast,setToast] = useState<ToastInfoWithID[]>([]);
    const [modal,setModal] = useState<ModalData>({
        show: false,
        id: '',
    });
    const [user,setUser] = useState<AuthUser>({
        id: null,
        login: null,
    })
    const navigate = useNavigate();

    const updateModalData = (id?: string) => {
        if (id) {
            setModal(prev => ({
                show: !prev.show,
                id: id,
            }))
        } else {
            setModal(prev => ({
                show: !prev.show,
                id: '',
            }))
        }
    }

    const updateToast = (obj: ToastInfo) => {
        setToast((prev) => ([
            {
                id: uuid(),
                ...obj
            },
            ...prev,
        ]))
    }

    const updateToastWithValidation = (param: any,title: string,message: string) => {
        //Na razie nie wykorzystywane w projekcie - jeżeli zostanie czas można przebudować wyświetlanie Toastów.
        if (param.err) {
            updateToast({
                class: "error",
                title: "Wystąpił błąd",
                description: param.err,
            })
        } else if (param instanceof Error) {
            updateToast({
                class: "error",
                title: "Wystąpił błąd",
                description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie",
            })
        } else {
            updateToast({
                class: "check",
                title: title,
                description: message,
            })
        }
    }

    const deleteToast = (id: string) => {
        setToast((prev) => {
            const itemIndex = prev.findIndex(e => e.id === id);
            prev.splice(itemIndex,1);
            return [...prev]
        })
    }

    useEffect(() => {

        (async () => {
            const user: any = await checkCookies();
            if (user) {
                if (user.err) {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: user.err
                    })
                    navigate('/home');
                } else if (user instanceof Error) {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie"
                    })
                    navigate('/home');
                } else {
                    setUser(user);
                    updateToast({
                        class: "check",
                        title: "Witaj ponownie!",
                        description: `Jesteś zalogowany jako ${user.login}`
                    })
                }
            } else {
                navigate('/home')
            }
        })();

    }, [])

    return (
        <>
            <AuthUserContext.Provider value={{
                user,
                setUser
            }}>
                <ToastContext.Provider value={{
                    toast,
                    updateToast,
                    deleteToast,
                    updateToastWithValidation,
                }}>
                    <ModalShowContext.Provider value={{
                        modal,
                        updateModalData,
                    }}>
                        <Toast/>
                        <Routes>
                            <Route path="/" element={<MainView/>}/>
                            <Route path="/home" element={<HomeView/>}/>
                            <Route path="/archive" element={<ArchiveView/>}/>
                            <Route path="/map" element={<MapView/>}/>
                            <Route path="/apply/:id" element={<ApplyView/>}/>
                            <Route path="/user" element={<UserView/>}/>
                            <Route path="*" element={<MainView/>}/>
                        </Routes>
                    </ModalShowContext.Provider>
                </ToastContext.Provider>
            </AuthUserContext.Provider>
        </>
  );
}

