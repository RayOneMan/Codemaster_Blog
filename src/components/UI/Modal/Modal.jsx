import cl from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
  return (
    visible && (<div className={cl.Modal} onClick={() => setVisible(false)}>
      <div className={cl.Modal__Content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>)
  );
};

export default Modal;
