import React,{useContext} from "react";

import "./Modal.css";
import {ModalShowContext} from "../../../Context/ModalShowContext";

interface Props {
    id: string,
    text: string;
    class: string;
    children: JSX.Element;
}


export const Modal = (props: Props) => {
    const {
        modal,
        updateModalData
    } = useContext(ModalShowContext);

    if (!modal.show) {
        return null
    }

    if (modal.id !== props.id) {
        return null
    }

    return (
        <>
            <div
                className="overlay"
                onMouseDown={() => updateModalData()}
            >
                <div className={`modal-${props.class}`} onMouseDown={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{props.text}</h2>
                        <button className="btn-modal-close" onClick={() => updateModalData()}></button>
                    </div>
                    <div className="modal-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}
