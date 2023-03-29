import React from "react";

import "./JobAddress.css"
import {Map} from "../Map/Map";
import {JobEntity} from "types";

interface Props {
    data: JobEntity
}

export const JobAddress = (props: Props) => {

    return (
        <Map
            address={props.data.address}
            lon={props.data.lon}
            lat={props.data.lat}
            name={props.data.jobName}
            desc={props.data.jobStatus}
            link={props.data.url}
        />
    )
}