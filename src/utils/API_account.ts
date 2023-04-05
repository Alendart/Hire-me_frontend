import {apiUrl} from "../config/api_config";
import {ErrorMessage,UserSimpleEntity} from "types"

const userUrl = `${apiUrl}/user`

//At this moment below function is not neccesary - BE check is login free before adding user. I leave it here for
// future implementation checking login right after client leaves input
export async function loginCheck(login: string): Promise<boolean | ErrorMessage> {
    const res = await fetch(`${userUrl}/login/check/${login}`);

    return await res.json()
}

export async function logoutUser(): Promise<boolean | ErrorMessage> {
    const res = await fetch(`${userUrl}/logout`,{
        method: "GET",
        credentials: "include"
    });
    if (res.status === 200) {
        return true
    } else {
        return res.json()
    }

}


export async function checkCookies(): Promise<UserSimpleEntity | null | ErrorMessage> {
    const res = await fetch(`${userUrl}/`,{
        method: "GET",
        credentials: "include"
    });
    return await res.json()
}

export async function createUser(login: string,pwd: string): Promise<string | ErrorMessage> {
    const res = await fetch(`${userUrl}/`,{
        method: "POST",headers: {
            "Content-Type": "application/json"
        },body: JSON.stringify({
            login: login,pwd: pwd
        }),

    })

    return await res.json()
}

export async function loginUser(login: string,pwd: string): Promise<string | false | ErrorMessage | any> {
    try {
        const res = await fetch(`${userUrl}/login`,{
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
    } catch (e) {
        return e
    }
}