import React from "react";
import {JobEntity} from "types";

import "./JobBody.css"
import {JobDescription} from "../JobDescription/JobDescription";
import {JobUrl} from "../JobUrl/JobUrl";
import {JobFiles} from "../JobFiles/JobFiles";
import {JobStatus} from "../JobStatus/JobStatus";
import {JobAddress} from "../JobAddress/JobAddress";

interface Props {
    data: JobEntity
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
            <JobStatus status={props.data.jobStatus}/>
        </section>
    )
}