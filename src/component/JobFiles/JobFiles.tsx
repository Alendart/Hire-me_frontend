import React from "react";

import "./JobFiles.css";
import {JobFileAddingForm} from "../JobFileAddingForm/JobFileAddingForm";
import {FileSelectForm} from "../FileSelectForm/FileSelectForm";
import {JobFileLink} from "../JobFileLink/JobFileLink";

interface Props {
    fileName: string | null;
}

export const JobFiles = (props: Props) => (
    <div className="job job-files" id="files">
        <div className="file-link">
            <JobFileLink fileName={props.fileName}/>
        </div>
        <div className="file-box">
            <JobFileAddingForm/>
            <FileSelectForm/>
        </div>
    </div>
)