import React from "react";
import {TableJobEntity} from "types";
import {OneRow} from "../common/OneRow/OneRow";

import "./CompanyListTable.css"

interface Props {
    list: TableJobEntity[]
}

export const CompanyListTable = (props: Props) => {


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
                {props.list.map(e => <OneRow item={e} key={e.id}/>)}
                </tbody>
            </table>
        </>
    )
}