import React from "react";
import {apiUrl} from "../../config/api_config";
import PDF from "../../icons8-pdf-80.png";

import "./JobFileLink.css"

interface Props {
    fileName: string | null;
}


export const JobFileLink = (props: Props) => (
    <>
        {
            props.fileName ?

                <div className="download-link-box">
                    <a
                        href={`${apiUrl}/cv/${props.fileName}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="download-link">
                            Aktualne CV
                            <img src={PDF} alt="PDF icon"/>
                            {props.fileName}.pdf
                        </div>
                    </a>
                    <div className="contribution-link-box">
                        <a className="contribution-link" target="_blank" rel="noreferrer"
                           href="https://icons8.com/icon/emjQ5sYXZdXI/pdf">PDF</a> icon by <a
                        className="contribution-link" target="_blank" rel="noreferrer"
                        href="https://icons8.com">Icons8</a>
                    </div>

                </div>
                :
                <div className="download-link-box">Tutaj będzie można podejrzeć CV gdy już jakieś wybierzesz...</div>
        }

    </>
)
