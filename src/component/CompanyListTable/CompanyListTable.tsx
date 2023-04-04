import React,{useState} from "react";
import {TableJobEntity} from "types";
import {OneRow} from "../common/OneRow/OneRow";

import "./CompanyListTable.css"
import {Modal} from "../common/Modal/Modal";
import {JobStatusSelectForm} from "../JobStatusSelectForm/JobStatusSelectForm";

interface Props {
    list: TableJobEntity[]
}

export const CompanyListTable = (props: Props) => {

    const [jobId,setJobId] = useState<string>('')

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Nazwa firmy</th>
                    <th>Status</th>
                    <th>Usuń</th>
                </tr>
                </thead>
                <tbody>
                {props.list.map(e => <OneRow item={e} passId={setJobId} key={e.id}/>)}
                </tbody>
            </table>
            <Modal id="JobStatusSelectForm" text="Wybierz nowy status" class="status">
                <JobStatusSelectForm id={jobId}/>
            </Modal>
        </>
    )
}