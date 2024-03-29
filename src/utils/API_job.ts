import {applicationStatusString,CreateFormJobEntity,ErrorMessage,JobEntity,MapJobEntity,TableJobEntity} from "types";
import {apiUrl} from "../config/api_config";


const jobUrl = `${apiUrl}/apply`

export async function listAllActiveJobs(): Promise<TableJobEntity[] | null | any> {
    try {
        const res = await fetch(`${jobUrl}/`,{
            method: "GET",
            credentials: "include",
        })

        return await res.json()
    } catch (e) {
        return e
    }

}

export async function listAllActiveJobsWithMapData(): Promise<MapJobEntity[] | null | any> {
    try {
        const res = await fetch(`${jobUrl}/map`,{
            method: "GET",
            credentials: "include",
        })

        return await res.json()
    } catch (e) {
        return e
    }

}

export async function collectFullJobData(id: string): Promise<JobEntity | ErrorMessage | any> {
    try {
        const res = await fetch(`${jobUrl}/job/${id}`,{
            method: "GET",
            credentials: "include",
        })

        return await res.json();
    } catch (e) {
        return e
    }

}

export async function createJob(data: CreateFormJobEntity): Promise<string | ErrorMessage | any> {
    try {
        const res = await fetch(`${jobUrl}/job`,{
            method: "POST",credentials: "include",headers: {
                "Content-Type": "application/json"
            },body: JSON.stringify(data),
        })

        return await res.json();
    } catch (e) {
        return e
    }

}

export async function updateJobStatus(newStatus: applicationStatusString,jobId: string): Promise<boolean | ErrorMessage | any> {
    try {
        const res = await fetch(`${jobUrl}/job`,{
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newStatus,
                jobId,
            }),
        })

        return await res.json();
    } catch (e) {
        return e
    }

}

export async function listLastArchiveJobs(): Promise<TableJobEntity | null | any> {
    try {
        const res = await fetch(`${jobUrl}/archive`,{
            method: "GET",
            credentials: "include",
        })

        return await res.json()
    } catch (e) {
        return e
    }

}

export async function listAllArchiveJobs(): Promise<TableJobEntity[] | null | any> {
    try {
        const res = await fetch(`${jobUrl}/archive/all`,{
            method: "GET",
            credentials: "include",
        })

        return await res.json()
    } catch (e) {
        return e
    }

}

export async function addCvFile(data: any): Promise<string | ErrorMessage | any> {
    try {
        const res = await fetch(`${jobUrl}/cv`,{
            method: "POST",credentials: "include",headers: {},body: JSON.stringify(data),
        })

        return await res.json();
    } catch (e) {
        return e
    }

}

export async function loadCvFile(jobId: string): Promise<string | ErrorMessage | any> {
    try {
        const res = await fetch(`${jobUrl}/cv/${jobId}`,{
            method: "GET",credentials: "include",
        })

        return await res.json();
    } catch (e) {
        return e
    }

}