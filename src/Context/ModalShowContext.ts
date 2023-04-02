import {createContext} from "react";
import {ModalShowContextType} from "../types/modal.context.types";


export const ModalShowContext = createContext<ModalShowContextType>({
    modal: {
        show: false,
        id: ''
    },
    updateModalData: (id?: string) => {
    },
})
