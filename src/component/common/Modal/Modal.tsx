import React from "react";

import "./Modal.css";

interface Props {
    class: string;
    show: boolean;
    handleClose: () => any;
    content: string | JSX.Element;
}


export const Modal = (props: Props) => {

    const close = () => {
        props.handleClose()
    }

    if (!props.show) {
        return null
    }

    return (
        <>
            <div className="overlay">
                <div className={`modal-${props.class}`}>
                    <div className="modal-header">
                        <h2>Modal Window</h2>
                    </div>
                    <div className="modal-content">
                        {props.content}
                    </div>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={close}>Zamknij</button>
                    </div>
                </div>
            </div>
        </>
    )
}
