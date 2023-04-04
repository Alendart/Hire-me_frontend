import React from "react";

import "./Btn.css"

interface Props {
    name: string;
    class: string;
    function: () => any;
}

export const Btn = (props: Props) => {
    const checkClass = () => {
        if (props.class === "switch") {
            return -1
        } else {
            return 0
        }
    }

    return (
        <button
            className={`btn btn-${props.class}`}
            onClick={() => props.function()}
            tabIndex={checkClass()}
        >
            {props.name}
        </button>

    )
}
