import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [value])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  )
};


export const Modal = ({ onClose, children, customClass }) => {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal" className={customClass}>
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
        <div id="x-button-holder" className={customClass}>
          <i 
            className="fa-solid fa-xmark close-x-button"
            onClick={onClose}
            />
        </div>
        {children}
      </div>
    </div>,
    modalNode
  );
};