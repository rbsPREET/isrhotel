import React, { useCallback, useEffect, useRef } from "react";
import classes from "../css/ui/Modal.module.css";

const Modal = (props) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setActiveModal(!props.activeModal);
    }
  }; // Close Modal if clicking outside of it

  const { setActiveModal, activeModal } = props;

  
  const escPress = useCallback(
    (e) => {
      if (e.key === "Escape" && activeModal) {
        setActiveModal(!activeModal);
      }
    },
    [setActiveModal, activeModal] //
  ); // Close Modal when click "ESC" key

  useEffect(() => {
    document.addEventListener("keydown", escPress);
    return () => document.removeEventListener("keydown", escPress);
  }, [escPress]);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className={classes.modalBackground}
    >
      <div className={classes.wrapper}>
        {props.changed ? props.isLogin : props.isNotLogin}
        <button
          className={classes.closeModal}
          onClick={() => setActiveModal(!activeModal)}
          aria-label="Close"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default Modal;
