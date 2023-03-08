import {apiUrl} from "../config/api_config";
import {errorMessage} from "types"

const userUrl = `${apiUrl}/user`


export async function loginCheck(login: string): Promise<boolean> {
    const res = await fetch(`${userUrl}/login/check/${login}`);
    return await res.json()
}

export async function checkCookies(): Promise<boolean> {
    const res = await fetch(`${userUrl}/`);
    return await res.json()
}

export async function createUser(login: string, pwd: string): Promise<string | errorMessage> {
    const res = await fetch(`${userUrl}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: login,
            pwd: pwd
        }),

    })
    return await res.json()
}

export async function loginUser(login: string, pwd: string): Promise<boolean> {
    const res = await fetch(`${userUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: login,
            pwd: pwd
        }),

    })
    return await res.json()
}