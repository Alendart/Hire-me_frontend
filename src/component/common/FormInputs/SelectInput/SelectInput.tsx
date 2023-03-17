import React from "react";
import {FieldInputProps, useField} from "formik";

import "./SelectInput.css"

interface Props {
    label: string;
}

export const SelectInput: React.FC<Props & FieldInputProps<string>> = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <>
            <div>
                <label htmlFor={props.name}>{label}</label>
                <select className={props.name} id={props.name} {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        </>
    )
}