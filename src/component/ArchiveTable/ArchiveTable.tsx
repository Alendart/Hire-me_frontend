import React from "react";
import {CompanyBasicData} from "../../types";
import {BtnTemp} from "../common/Btn/BtnTemp";

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
                    <BtnTemp name="Przywróć"/>
                </td>
            </tr>
            </tbody>
        </table>
    </>
)
