import React from "react";
import {Btn} from "../Btn/Btn";
import {CompanyBasicData} from "../../../types";


interface Props {
    item: CompanyBasicData
}

export const OneRow = (props: Props) => {


    return (
        <tr>
            <td>{props.item.name}</td>
            <td>
                <Btn name="Szczegóły"/>
            </td>
            <td>{props.item.status}</td>
            <td>❌</td>
            <td>✔</td>
        </tr>
    )
}