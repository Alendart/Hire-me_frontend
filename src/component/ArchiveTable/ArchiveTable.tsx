import React from "react";
import {TableJobEntity} from "types";
import {BtnTemp} from "../common/Btn/BtnTemp";

import "./ArchiveTable.css"
import {useNavigate} from "react-router-dom";


interface Props {
    item: TableJobEntity | undefined
}

export const ArchiveTable = (props: Props) => {
    const navigate = useNavigate()

    const click = () => {
        if (props.item) {
            navigate(`/apply/${props.item.id}`)
        }
    }

    return (
        <>
            {
                props.item ?
                    <table className="archive-table">
                        <tbody>
                        <tr onClick={click}>
                            <td>{props.item.jobName}</td>
                            <td>{props.item.jobStatus}</td>
                            <td>
                                <BtnTemp name="Przywróć"/>
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
