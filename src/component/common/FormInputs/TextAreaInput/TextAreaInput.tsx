import React from "react";

import "./TextAreaInput.css"
import {useField} from "formik";

interface Props {
    label: string
    name: string;
    rows: number;
    placeholder: string;
}

export const TextAreaInput = (props: Props) => {
    const [field, meta] = useField({
        name: props.name,
    });
    return (
        <div className="textarea-box">
            <label
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <textarea className={props.name} id={props.name} {...field} {...props}/>
            {
                meta.touched && meta.error ?
                    <div className="error">{meta.error}</div>
                    : null
            }
        </div>
    )
}