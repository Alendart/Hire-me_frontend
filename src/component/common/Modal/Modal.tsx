import React from "react";

import "./Modal.css";

interface Props {
    text: string;
    class: string;
    show: boolean;
    handleClose: () => any;
    children: JSX.Element;
}


export const Modal = (props: Props) => {

    if (!props.show) {
        return null
    }

    return (
        <>
            <div
                className="overlay"
                onMouseDown={() => props.handleClose()}
            >
                <div className={`modal-${props.class}`} onMouseDown={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{props.text}</h2>
                        <button className="btn-modal-close" onClick={() => props.handleClose()}></button>
                    </div>
                    <div className="modal-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}
