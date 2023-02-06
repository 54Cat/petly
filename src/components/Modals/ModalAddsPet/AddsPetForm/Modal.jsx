import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalItem } from "./AddsPetModalStyled";



const modalRoot = document.getElementById("modal-root");

const Modal = ({children, onClose}) => {
  
  useEffect(() => {
   document.addEventListener("keydown", closeModal); 
    
    return () => { document.removeEventListener("keydown", closeModal); };
  }
  )
  
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      onClose();
    }  
  }
  return createPortal(
      <Overlay onClick={closeModal}>
        <ModalItem >
          <span  onClick={closeModal}>X</span>
          {children}
        </ModalItem>
      </Overlay>,
      modalRoot
    )
}

export default Modal;