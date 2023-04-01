import React,{useContext,useEffect,useState} from "react";
import {JobEntity} from "types";

import "./ApplyView.css"
import {JobHeader} from "../JobHeader/JobHeader";
import {JobBody} from "../JobBody/JobBody";
import {useNavigate,useParams} from "react-router-dom";
import {collectFullJobData} from "../../utils/API_job";
import {ToastContext} from "../../Context/ToastContext";
import {Spinner} from "../common/Spinner/Spinner";

export const ApplyView = () => {
    const {updateToast} = useContext(ToastContext);
    const [jobData,setJobData] = useState<JobEntity | null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const {id} = useParams();

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

    },[])

    if (loading) {
        return <Spinner/>
    }

    return (
        <>
            {
                jobData ?
                    <div className="job-overlay">
                        <JobHeader/>
                        <JobBody data={jobData}/>
                    </div>
                    :
                    null
            }

        </>
    )
}