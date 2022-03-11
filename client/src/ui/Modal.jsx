import Input from "./Input";
import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "../css/ui/Modal.module.css";
import { useDispatch } from "react-redux";
import { storeUser } from "../store/user";

const Modal = (props) => {
  const modalRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const distpach = useDispatch();

  const handleLoginAndRegister = () => {
    distpach(
      storeUser({
        firstName: "dor",
        lastName: "levy",
        address: "address test",
        phone: "0525938898",
        email: "dorwgeqwsfsdr@dor.com",
        password: "123456",
      })
    );
    setIsLogin(!isLogin);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setActiveModal(!props.activeModal);
    }
  }; // Close Modal if clicking outside of it

  const escPress = useCallback(
    (e) => {
      if (e.key === "Escape" && props.activeModal) {
        props.setActiveModal(!props.activeModal);
      }
    },
    [props.setActiveModal, props.activeModal]
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
          onClick={() => props.setActiveModal(!props.activeModal)}
          aria-label="Close"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default Modal;
