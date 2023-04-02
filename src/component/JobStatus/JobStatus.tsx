import React,{useContext} from "react";
import {applicationStatus} from "types";

import "./JobStatus.css"
import {Btn} from "../common/Btn/Btn";
import {Modal} from "../common/Modal/Modal";
import {JobStatusSelectForm} from "../JobStatusSelectForm/JobStatusSelectForm";
import {ModalShowContext} from "../../Context/ModalShowContext";


interface Props {
    id: string;
    status: applicationStatus
}

export const JobStatus = (props: Props) => {
    const {updateModalData} = useContext(ModalShowContext)

    return (
        <div className="job job-status" id="status">
            <div className="job-status-display">
                <p className="status-p">Aktualny status podania:<br/> <strong>{props.status}</strong></p>
            </div>
            <div className="job-status-changer">
                <Btn name="Zmiana statusu" class="status-changer"
                     function={() => updateModalData("JobStatusSelectForm")}/>
                <Modal id="JobStatusSelectForm" text="Wybierz nowy status" class="status">
                    <JobStatusSelectForm id={props.id}/>
                </Modal>
            </div>
        </div>
    )
}