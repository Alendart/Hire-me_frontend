import React from "react";
import {applicationStatus} from "types";

import "./JobStatus.css"


interface Props {
    status: applicationStatus
}

export const JobStatus = (props: Props) => {


    return (
        <div className="job job-status" id="status">
            <div className="job-status-display">
                <p className="status-p">Aktualny status podania:<br/> <strong>{props.status}</strong></p>
            </div>
            <div className="job-status-changer">
                <button className="status-changer">Zmiana statusu</button>
            </div>
        </div>
    )
}