import React from "react";

import "./SubmitBtn.css"

interface Props {
    name: string;
    class: string;
}

export const SubmitBtn = (props: Props) => (
    <button
        className={`btn btn-submit-${props.class}`}
        type="submit"
    >
        {props.name}
    </button>
)
