import React from "react";

import "./Btn.css"

interface Props {
    name: string;
    function: () => any;
}

export const Btn = (props: Props) => (
    <>
        <button className="btn" onClick={() => props.function()}>{props.name}</button>
    </>
)
