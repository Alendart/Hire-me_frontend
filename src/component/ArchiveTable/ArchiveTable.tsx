import React,{useContext} from "react";
import {TableJobEntity} from "types";

import "./ArchiveTable.css"
import {useNavigate} from "react-router-dom";
import {Btn} from "../common/Btn/Btn";
import {ToastContext} from "../../Context/ToastContext";
import {RefreshContext} from "../../Context/RefreshContext";
import {updateJobStatus} from "../../utils/API_job";


interface Props {
    list: TableJobEntity[]
}

export const ArchiveTable = (props: Props) => {
    const navigate = useNavigate()
    const {updateToast} = useContext(ToastContext)
    const {updateRefresh} = useContext(RefreshContext);

    const click = (index: number) => navigate(`/apply/${props.list[index].id}`);

    const setActive = async (index: number) => {
        const oneJob = props.list[index]
        const res = await updateJobStatus("Prepared",oneJob.id);
        if (res === true) {
            updateToast({
                class: "check",
                title: "Ogłoszenie przywrócone",
                description: `Przywrócono ogłoszenie "${oneJob.jobName}"`,
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

    if (!props.list[0]) {
        return null
    } else if (props.list.length === 1) {
        return (
            <table className="archive-table">
                <tbody>
                <tr>
                    <td className="table-job-name" onClick={() => click(0)}>{props.list[0].jobName}</td>
                    <td>
                        <Btn name="Przywróć" class="set-active" function={() => setActive(0)}/>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    } else {
        return (
            <table className="archive-table">
                <thead>
                <tr>
                    <th>Nazwa ogłoszenia</th>
                    <th>Przywróć</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.list.map((e,i) => (
                        <tr key={e.id}>
                            <td className="table-job-name" onClick={() => click(i)}>{e.jobName}</td>
                            <td>
                                <Btn name="Przywróć" class="set-active" function={() => setActive(i)}/>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }

}
