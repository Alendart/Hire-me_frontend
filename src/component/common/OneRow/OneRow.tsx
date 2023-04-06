import React,{useContext} from "react";
import {TableJobEntity} from "types";
import {useNavigate} from "react-router-dom";
import {ModalShowContext} from "../../../Context/ModalShowContext";
import {RefreshContext} from "../../../Context/RefreshContext";
import {updateJobStatus} from "../../../utils/API_job";
import {ToastContext} from "../../../Context/ToastContext";
import {Btn} from "../Btn/Btn";


interface Props {
    item: TableJobEntity;
    passId: (id: string) => any;
}

export const OneRow = (props: Props) => {
    const navigate = useNavigate();
    const {updateToast} = useContext(ToastContext)
    const {updateModalData} = useContext(ModalShowContext);
    const {updateRefresh} = useContext(RefreshContext);

    const statusChange = () => {
        updateModalData("JobStatusSelectForm");
        props.passId(props.item.id);
    }

    const setStatusOnArchived = async () => {
        const res = await updateJobStatus("Archived",props.item.id);
        if (res === true) {
            updateToast({
                class: "check",
                title: "Przeniesiono do archiwum",
                description: `Zarchiwizowano ogłoszenie "${props.item.jobName}"`,
            });
            updateRefresh();
        } else if (res.err) {
            updateToast({
                class: "error",
                title: "Błąd",
                description: res.err,
            })
        } else {
            updateToast({
                class: "error",
                title: "Błąd",
                description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie"
            })
        }

    }


    const click = () => {
        navigate(`/apply/${props.item.id}`)
    }

    return (
        <tr>
            <td className="table-job-name" onClick={click}>{props.item.jobName}</td>
            <td>
                <Btn name={props.item.jobStatus} class={"table-status-change"} function={statusChange}/>
            </td>
            <td>
                <p className="table-delete" onClick={setStatusOnArchived}>❌</p>
            </td>
        </tr>
    )
}