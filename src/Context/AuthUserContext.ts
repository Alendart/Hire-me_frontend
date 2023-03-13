import {createContext} from "react";
import {AuthUserContextType} from "../types";


export const AuthUserContext = createContext<AuthUserContextType>({
    user: {
        id: null,
        login: null
    },
    setUser: (obj) => {
    }
});