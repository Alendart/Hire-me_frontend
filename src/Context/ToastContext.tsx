import {createContext} from "react";
import {ToastContextType} from "../types";


export const ToastContext = createContext<ToastContextType>({
    toast: {
        id: '',
        description: '',
        title: '',
        class: null,
    },
    updateToast: (obj) => {
    }
})
