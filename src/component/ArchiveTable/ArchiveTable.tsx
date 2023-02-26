import React from "react";
import {CompanyBasicData} from "../../types";
import {Btn} from "../common/Btn/Btn";

import "./ArchiveTable.css"


interface Props {
    item: CompanyBasicData
}

export const ArchiveTable = (props: Props) => (
    <>
        <table className="archive-table">
            <tbody>
            <tr>
                <td>{props.item.name}</td>
                <td>{props.item.status}</td>
                <td>
                    <Btn name="Przywróć"/>
                </td>
            </tr>
            </tbody>
        </table>
    </>
)
