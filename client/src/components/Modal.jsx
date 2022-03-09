import Input from "../ui/Input";
import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "../css/Modal.module.css";
import { useDispatch } from "react-redux";
import { storeUser } from "../store/user";

export const Modal = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const distpach = useDispatch();
  const handleLoginAndRegister = () => {
    distpach(
      storeUser({
        firstName: "dor",
        lastName: "levy",
        address: "address test",
        phone: "0525938898",
        email: "dorwgr@dor.com",
        password: "123456",
      })
    );
    setIsLogin((prev) => !prev);
  };

  // Close Modal if clicking outside of it
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setActiveModal(false);
    }
  };

  // Close Modal when click "ESC" key
  const { setActiveModal, activeModal } = props;
  const escPress = useCallback(
    (e) => {
      if (e.key === "Escape" && activeModal) {
        setActiveModal(false);
      }
    },
    [setActiveModal, activeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", escPress);
    return () => document.removeEventListener("keydown", escPress);
  }, [escPress]);

  /* Will Replace to UI template for Login/Register */

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className={classes.modalBackground}
    >
      <div activeModal={props.activeModal} className={classes.wrapper}>
        {isLogin ? (
          <div className={classes.modalContentL}>
            Doesn't have an account?
            <span
              className={classes.checkStatus}
              onClick={handleLoginAndRegister}
            >
              register now
            </span>
          </div>
        ) : (
          <div className={classes.modalContentL}>
            Already a User?
            <span
              className={classes.checkStatus}
              onClick={handleLoginAndRegister}
            >
              Login
            </span>
          </div>
        )}

        <div className={classes.modalContentR}>
          {isLogin ? (
            <div>
              <h1>@ISRHOTEL</h1>
              <div>
                <form className={classes.formContent}>
                  <Input
                    placeholder="enter you email"
                    nameId="email"
                    type="text"
                    label="Email"
                  />
                  <Input
                    placeholder="password"
                    nameId="password"
                    type="password"
                    label="Password"
                  />
                  <button onSubmit={{}}>Login</button>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <h1>@ISRHOTEL</h1>
              <div>
                <form className={classes.formContent}>
                  <Input
                    placeholder="enter you email"
                    nameId="email"
                    type="text"
                    label="Email"
                  />
                  <Input
                    placeholder="password"
                    nameId="password"
                    type="password"
                    label="Password"
                  />
                  <Input
                    placeholder="Confirm Pass"
                    nameId="confirm-password"
                    type="password"
                    label="Confirm Password"
                  />
                  <button onSubmit={{}}>Register</button>
                </form>
              </div>
            </div>
          )}
        </div>
        <button
          className={classes.closeModal}
          onClick={() => props.setActiveModal((prev) => !prev)}
          aria-label="Close"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};
