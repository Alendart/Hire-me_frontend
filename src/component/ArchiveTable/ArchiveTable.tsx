import React,{useContext} from "react";
import {TableJobEntity} from "types";

import "./ArchiveTable.css"
import {useNavigate} from "react-router-dom";
import {Btn} from "../common/Btn/Btn";
import {ToastContext} from "../../Context/ToastContext";
import {MainRefreshContext} from "../../Context/MainRefreshContext";
import {updateJobStatus} from "../../utils/API_job";


interface Props {
    item: TableJobEntity | undefined
}

export const ArchiveTable = (props: Props) => {
    const navigate = useNavigate()
    const {updateToast} = useContext(ToastContext)
    const {updateMainRefresh} = useContext(MainRefreshContext);

    const click = () => {
        if (props.item) {
            navigate(`/apply/${props.item.id}`)
        }
    }

    const setActive = async () => {
        if (props.item) {
            const res = await updateJobStatus("Prepared",props.item.id);
            if (res === true) {
                updateToast({
                    class: "check",
                    title: "Ogłoszenie przywrócone",
                    description: `Przywrócono ogłoszenie "${props.item.jobName}"`,
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
    }

    return (
        <>
            {
                props.item ?
                    <table className="archive-table">
                        <tbody>
                        <tr>
                            <td onClick={click}>{props.item.jobName}</td>
                            <td>
                                <Btn name="Przywróć" class="set-active" function={setActive}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    :
                    null
            }

        </>
    )
}
