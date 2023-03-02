import React from "react";
import {BtnTemp} from "../Btn/BtnTemp";
import {CompanyBasicData} from "../../../types";


interface Props {
    item: CompanyBasicData
}

export const OneRow = (props: Props) => {


    return (
        <tr>
            <td>{props.item.name}</td>
            <td>
                <BtnTemp name="Szczegóły"/>
            </td>
            <td>{props.item.status}</td>
            <td>❌</td>
            <td>✔</td>
        </tr>
    )
}