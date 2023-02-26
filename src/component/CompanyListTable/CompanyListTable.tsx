import React from "react";
import {CompanyBasicData} from "../../types";
import {OneRow} from "../common/OneRow/OneRow";

import "./CompanyListTable.css"

interface Props {
    list: CompanyBasicData[]
}

export const CompanyListTable = (props: Props) => {


    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Nazwa firmy</th>
                    <th>Szczegóły</th>
                    <th>Status</th>
                    <th>Cross</th>
                    <th>Check</th>
                </tr>
                </thead>
                <tbody>
                {props.list.map(e => <OneRow item={e} key={e.id}/>)}
                </tbody>
            </table>
        </>
    )
}