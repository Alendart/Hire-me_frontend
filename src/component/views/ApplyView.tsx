import React,{useContext,useEffect,useState} from "react";
import {JobEntity} from "types";

import "./ApplyView.css"
import {JobHeader} from "../JobHeader/JobHeader";
import {JobBody} from "../JobBody/JobBody";
import {useNavigate,useParams} from "react-router-dom";
import {collectFullJobData} from "../../utils/API_job";
import {ToastContext} from "../../Context/ToastContext";
import {Spinner} from "../common/Spinner/Spinner";
import {JobRefreshContext} from "../../Context/JobRefreshContext";

export const ApplyView = () => {
    const {updateToast} = useContext(ToastContext);
    const [jobRefresh,setJobRefresh] = useState<boolean>(false);
    const [jobData,setJobData] = useState<JobEntity | null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const updateJobRefresh = () => {
        setJobRefresh(prevState => !prevState)
    }

    useEffect(() => {
        if (typeof id === "string") {
            setLoading(true);
            (async () => {
                const data = await collectFullJobData(id);
                if (data.job) {
                    setJobData(data.job)
                } else if (data.err) {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: data.err
                    });
                    navigate('/')
                } else {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: "Wystąpił nieznany błąd, proszę spróbować później"
                    })
                    navigate('/')
                }
                setLoading(false);

            })()
        }

    },[jobRefresh])

    if (loading) {
        return <Spinner/>
    }

    return (
        <>
            <JobRefreshContext.Provider
                value={{
                    jobRefresh,
                    updateJobRefresh
                }}
            >
                {
                    jobData ?
                        <div className="job-overlay">
                            <JobHeader/>
                            <JobBody data={jobData}/>
                        </div>
                        :
                        null
                }
            </JobRefreshContext.Provider>
        </>
    )
}