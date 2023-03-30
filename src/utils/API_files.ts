import {ErrorMessage} from "types";
import {apiUrl} from "../config/api_config";


const fileUrl = `${apiUrl}/cv`

export async function addFile(data: File,fileName: string,jobId: string): Promise<true | ErrorMessage | any> {
    try {
        const formData = new FormData();
        formData.append('file',data)
        formData.append('name',fileName)
        formData.append('jobId',jobId)

        const res = await fetch(`${fileUrl}/`,{
            method: "POST",
            credentials: "include",
            body: formData,
        })

        return await res.json();
    } catch (e) {
        return e
    }

}

export async function listAllFiles(): Promise<string[] | null | ErrorMessage | any> {
    try {
        const res = await fetch(`${fileUrl}/`,{
            method: "GET",
            credentials: "include",
        })

        return await res.json();
    } catch (e) {
        return e
    }

}

export async function chooseSelectedFile(jobId: string,fileName: string): Promise<true | ErrorMessage | any> {
    try {
        const res = await fetch(`${fileUrl}/select`,{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jobId,
                fileName,
            })
        })

        return await res.json();
    } catch (e) {
        return e
    }

}