import {apiUrl} from "../config/api_config";
import {errorMessage, UserSimpleEntity} from "types"

const userUrl = `${apiUrl}/user`

//At this moment below function is not neccesary - BE check is login free before adding user. I leave it here for
// future implementation checking login right after client leaves input
export async function loginCheck(login: string): Promise<boolean | errorMessage> {
    const res = await fetch(`${userUrl}/login/check/${login}`);

    return await res.json()
}

export async function checkCookies(): Promise<UserSimpleEntity | null | errorMessage> {
    const res = await fetch(`${userUrl}/`, {
        method: "GET",
        credentials: "include"
    });
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

export async function loginUser(login: string, pwd: string): Promise<boolean | errorMessage> {
    const res = await fetch(`${userUrl}/login`, {
        method: "POST",
        credentials: "include",
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