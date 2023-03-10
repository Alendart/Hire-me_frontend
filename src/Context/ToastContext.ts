import {createContext} from "react";
import {ToastInfo} from "../types";


export const ToastContext = createContext({
    toast: {},
    setToast: (obj: ToastInfo) => {
    },
})