import React,{useState} from "react";

import "./JobFiles.css";
import {JobFileAddingForm} from "../JobFileAddingForm/JobFileAddingForm";
import {FileSelectForm} from "../FileSelectForm/FileSelectForm";
import {JobFileLink} from "../JobFileLink/JobFileLink";
import {Btn} from "../common/Btn/Btn";
import {Modal} from "../common/Modal/Modal";

interface Props {
    fileName: string | null;
}

export const JobFiles = (props: Props) => {
    const [showAdding,setShowAdding] = useState<boolean>(false);
    const [showSelect,setShowSelect] = useState<boolean>(false);

    return (
        <div className="job job-files" id="files">
            <div className="file-link">
                <JobFileLink fileName={props.fileName}/>
            </div>
            <div className="file-box">
                <Btn name="Dodaj nowy plik" class="file-modal" function={() => setShowAdding(true)}/>
                <Btn name="Wybierz plik z listy" class="file-modal" function={() => setShowSelect(true)}/>
                <Modal text="Dodawanie CV" class="file-add" show={showAdding} handleClose={() => setShowAdding(false)}>
                    <JobFileAddingForm/>
                </Modal>
                <Modal text="Wybierz CV" class="file-select" show={showSelect} handleClose={() => setShowSelect(false)}>
                    <FileSelectForm/>
                </Modal>
            </div>
        </div>
    )
}