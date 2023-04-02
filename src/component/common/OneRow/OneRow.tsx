import React,{useContext} from "react";
import {TableJobEntity} from "types";
import {useNavigate} from "react-router-dom";
import {ModalShowContext} from "../../../Context/ModalShowContext";
import {MainRefreshContext} from "../../../Context/MainRefreshContext";
import {updateJobStatus} from "../../../utils/API_job";
import {ToastContext} from "../../../Context/ToastContext";


interface Props {
    item: TableJobEntity;
    passId: (id: string) => any;
}

export const OneRow = (props: Props) => {
    const navigate = useNavigate();
    const {updateToast} = useContext(ToastContext)
    const {updateModalData} = useContext(ModalShowContext);
    const {updateMainRefresh} = useContext(MainRefreshContext);

    const statusChange = () => {
        updateModalData("JobStatusSelectForm");
        props.passId(props.item.id);
    }

    const setStatusOnArchived = async () => {
        const res = await updateJobStatus("Archived",props.item.id);
        if (res === true) {
            updateToast({
                class: "check",
                title: "Zrobione",
                description: `Poprawnie zmieniono status ogłoszenia "${props.item.jobName}"`,
            });
            updateMainRefresh();
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
            <td onClick={statusChange}>{props.item.jobStatus}</td>
            <td onClick={setStatusOnArchived}>❌</td>
        </tr>
    )
}