import React,{useContext} from "react";

import "./JobFiles.css";
import {JobFileAddingForm} from "../JobFileAddingForm/JobFileAddingForm";
import {FileSelectForm} from "../FileSelectForm/FileSelectForm";
import {JobFileLink} from "../JobFileLink/JobFileLink";
import {Btn} from "../common/Btn/Btn";
import {Modal} from "../common/Modal/Modal";
import {ModalShowContext} from "../../Context/ModalShowContext";

interface Props {
    fileName: string | null;
}

export const JobFiles = (props: Props) => {
    const {updateModalData} = useContext(ModalShowContext)

    return (
        <div className="job job-files" id="files">
            <div className="file-link">
                <JobFileLink fileName={props.fileName}/>
            </div>
            <div className="file-box">
                <Btn name="Dodaj nowy plik" class="file-modal" function={() => updateModalData("JobFileAddingForm")}/>
                <Btn name="Wybierz plik z listy" class="file-modal" function={() => updateModalData("FileSelectForm")}/>
                <Modal id="JobFileAddingForm" text="Dodawanie CV" class="file-add">
                    <JobFileAddingForm/>
                </Modal>
                <Modal id="FileSelectForm" text="Wybierz CV" class="file-select">
                    <FileSelectForm/>
                </Modal>
            </div>
        </div>
    )
}