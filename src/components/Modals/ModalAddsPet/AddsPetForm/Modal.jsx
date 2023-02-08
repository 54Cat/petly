import { useEffect } from "react";
import { createPortal } from "react-dom";
//import { Overlay, ButtonCloseModal, ButtonCloseIcon } from "./AddsPetModalStyled";
import { Overlay } from "./AddsPetModalStyled";

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
       <Overlay onClick={closeModal} >
           {children}
       </Overlay>,
       modalRoot
     )

  // return createPortal(
  //     <Overlay onClick={closeModal}>
  //       {/* <ModalItem >
  //       <ButtonCloseModal type="button" onClick={closeModal}>
  //         <ButtonCloseIcon />
  //       </ButtonCloseModal>
  //         {children}
  //       </ModalItem> */}
  //       <ButtonCloseModal type="button" onClick={closeModal}>
  //         <ButtonCloseIcon />
  //       </ButtonCloseModal>
  //         {children}
  //     </Overlay>,
  //     modalRoot
  //   )
}

export default Modal;