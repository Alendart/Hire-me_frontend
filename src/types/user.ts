export interface AuthUser {
    id: string | null;
    login: string | null;
}


export type AuthUserContextType = {
    user: AuthUser;
    setUser: (obj: AuthUser) => void;
}