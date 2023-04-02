import React from "react";
import {TableJobEntity} from "types";
import {useNavigate} from "react-router-dom";


interface Props {
    item: TableJobEntity
}

export const OneRow = (props: Props) => {
    const navigate = useNavigate()

    const click = () => {
        navigate(`/apply/${props.item.id}`)
    }

    return (
        <tr>
            <td className="table-job-name" onClick={click}>{props.item.jobName}</td>
            <td onClick={() => console.log("Zaktualizuj status")}>{props.item.jobStatus}</td>
            <td onClick={() => console.log("Zarchivizowano")}>❌</td>
        </tr>
    )
}