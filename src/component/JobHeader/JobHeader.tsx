import React from "react";
import {NavBar} from "../common/NavBar/NavBar";

import "./JobHeader.css"


export const JobHeader = () => (
    <section className="job job-header">
        <NavBar
            class="job"
            links={[
                ["desc","Opis"],
                ["url","Link"],
                ["map","Mapa"],
                ["files","Pliki"],
                ["status","Status"],
            ]}
        />
    </section>
)