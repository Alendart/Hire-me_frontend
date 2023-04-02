import React from "react";
import {JobEntity} from "types";
import {JobDescription} from "../JobDescription/JobDescription";
import {JobUrl} from "../JobUrl/JobUrl";
import {JobStatus} from "../JobStatus/JobStatus";
import {JobAddress} from "../JobAddress/JobAddress";
import {JobFiles} from "../JobFiles/JobFiles";

import "./JobBody.css"

interface Props {
    id: string;
    data: JobEntity;
}

export const JobBody = (props: Props) => {

    return (
        <section>
            <div className="job job-name">
                <h1>{props.data.jobName}</h1>
            </div>
            <JobDescription description={props.data.jobDesc}/>
            <JobUrl link={props.data.url}/>
            <JobAddress data={props.data}/>
            <JobFiles fileName={props.data.fileName}/>
            <JobStatus id={props.id} status={props.data.jobStatus}/>
        </section>
    )
}