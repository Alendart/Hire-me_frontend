import React from "react";
import {ArchiveTable} from "../ArchiveTable/ArchiveTable";
import {BtnTemp} from "../common/Btn/BtnTemp";
import {applicationStatus} from "types";


import "./Footer.css"

const archCompany = {
    id: "Sdakl22287978924566dw;qd",
    name: "Łzy i śmiech",
    status: applicationStatus.Refused,
};


export const Footer = () => (
    <footer>
        <div>
            <h3>Ostatnio zarchiwizowane zgłoszenia:</h3>
            <ArchiveTable item={archCompany}/>
            <BtnTemp name="Przejdź do archiwum"/>
            <p>Image by <a
                href="https://www.freepik.com/free-vector/flat-design-polygonal-background_13264338.htm#query=background%20geometric%20green&position=1&from_view=search&track=ais">Freepik</a>
            </p>
        </div>
    </footer>
)