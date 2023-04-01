import React,{useState} from "react";
import {applicationStatus} from "types";

import "./JobStatus.css"
import {Btn} from "../common/Btn/Btn";
import {Modal} from "../common/Modal/Modal";
import {JobStatusSelectForm} from "../JobStatusSelectForm/JobStatusSelectForm";


interface Props {
    status: applicationStatus
}

export const JobStatus = (props: Props) => {
    const [show,setShow] = useState<boolean>(false);


    return (
        <div className="job job-status" id="status">
            <div className="job-status-display">
                <p className="status-p">Aktualny status podania:<br/> <strong>{props.status}</strong></p>
            </div>
            <div className="job-status-changer">
                <Btn name="Zmiana statusu" class="status-changer" function={() => setShow(true)}/>
                <Modal text="Wybierz nowy status" class="status" show={show} handleClose={() => setShow(false)}>
                    <JobStatusSelectForm/>
                </Modal>
            </div>
        </div>
    )
}