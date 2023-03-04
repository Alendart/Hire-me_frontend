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
                onClick={() => props.handleClose()}
            >
                <div className={`modal-${props.class}`} onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{props.text}</h2>
                    </div>
                    <div className="modal-content">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={() => props.handleClose()}>Zamknij</button>
                    </div>
                </div>
            </div>
        </>
    )
}
