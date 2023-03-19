import React from "react";
import {useField} from "formik";

import "./Select.css"

interface Props {
    label: string;
    name: string;

    [p: string]: any;
}

export const Select = (props: Props) => {
    const [field, meta] = useField(props);
    return (
        <div className="select-box">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select id={props.name} className={props.name} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};