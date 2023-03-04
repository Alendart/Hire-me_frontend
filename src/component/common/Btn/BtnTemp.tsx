import React from "react";

import "./Btn.css"

interface Props {
    name: string;
}

export const BtnTemp = (props: Props) => (
    <>
        <button className="btn">{props.name}</button>
    </>
)
