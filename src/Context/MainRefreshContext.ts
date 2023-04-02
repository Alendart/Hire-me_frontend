import {createContext} from "react";
import {MainRefreshContextType} from "../types/main.context.types";


export const MainRefreshContext = createContext<MainRefreshContextType>({
    mainRefresh: false,
    updateMainRefresh: () => {
    },
})
