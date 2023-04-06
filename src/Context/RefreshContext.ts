import {createContext} from "react";
import {RefreshContextType} from "../types/refresh.context.types";


export const RefreshContext = createContext<RefreshContextType>({
    refresh: false,
    updateRefresh: () => {
    },
})
