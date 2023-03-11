import React, {useState} from 'react';
import './App.css';
import {MainView} from "./component/views/MainView";
import {Route, Routes} from "react-router-dom";
import {ApplyView} from "./component/views/ApplyView";
import {MapView} from "./component/views/MapView";
import {ToastInfo, ToastInfoWithID} from "./types";
import {ToastContext} from './Context/ToastContext';
import {v4 as uuid} from 'uuid'
import {Toast} from "./component/common/Toast/Toast";

function App() {
    const [toast, setToast] = useState<ToastInfoWithID>({
        id: '',
        class: null,
        description: "",
        title: '',
    })

    const updateToast = (obj: ToastInfo) => {
        setToast(() => ({
            id: uuid(),
            ...obj
        }))
    }

    return (
        <>
            <ToastContext.Provider value={{toast, updateToast}}>
                <Toast/>
                <Routes>
                    <Route path="/" element={<MainView/>}/>
                    <Route path="/map" element={<MapView/>}/>
                    <Route path="/apply/:id" element={<ApplyView/>}/>
                    <Route path="*" element={<MainView/>}/>
                </Routes>
            </ToastContext.Provider>
        </>
  );
}

export default App;
