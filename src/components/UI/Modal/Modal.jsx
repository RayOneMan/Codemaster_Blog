import React from "react";
import "./Modal.scss";

const Modal = ({children, visible, setVisible}) => {
    return (
        visible && (<div className="Modal" onClick={() => setVisible(false)}>
            <div className="Modal__Content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>)
    );
};

export default Modal;