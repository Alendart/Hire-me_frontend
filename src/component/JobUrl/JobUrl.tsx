import React from "react";

import "./JobUrl.css"

interface Props {
    link: string;
}

export const JobUrl = (props: Props) => (
    <div className="job job-url" id="url">
        <p className="company-url-text">Link do firmy</p>
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="company-url"
        >
            {props.link}
        </a>
    </div>
)