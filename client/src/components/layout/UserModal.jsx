import Modal from "../../ui/Modal";
import classes from "../../css/layout/UserModal.module.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { storeUser, loginHandler as loginUser } from "../../store/user";
import Input from "../../ui/Input";
import Form from "../../ui/Form";

const UserModal = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const distpach = useDispatch();
  const email = useRef();
  const password = useRef();
  const verifyPSW = useRef();

  const registerHandler = () => {
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

  const loginHandler = (e) => {
    e.preventDefault();
    distpach(
      loginUser({
        email: email.current.value,
        password: password.current.value,
      })
    );
  };
  const SideisLogin = (
    <>
      <div className={classes.modalContentL}>
        Doesn't have an account?
        <span
          className={classes.checkStatus}
          onClick={() => setIsLogin(!isLogin)}
        >
          register now
        </span>
      </div>
      <div className={classes.modalContentR}>
        <div>
          <h1 className={classes.formTitle}>LOGIN</h1>
          <div>
            <Form
              method="POST"
              onSubmit={loginHandler}
              className={classes.formContent}
            >
              <Input
                ref={email}
                dataValueName="Email"
                className={classes.input}
                nameId="email"
                type="text"
                label="Email"
                length={3}
              />
              <Input
                ref={password}
                className={classes.input}
                nameId="password"
                type="password"
                dataValueName="Password"
                label="Password"
              />
              <button>Login</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );

  const SideisNotLogin = (
    <>
      <div className={classes.modalContentL}>
        Already a User?
        <span
          className={classes.checkStatus}
          onClick={() => setIsLogin(!isLogin)}
        >
          Login
        </span>
      </div>
      <div className={classes.modalContentR}>
        <div>
          <h1 className={classes.formTitle}>REGISTER</h1>
          <div>
            <form onSubmit={registerHandler} className={classes.formContent}>
              <Input
                ref={email}
                className={classes.input}
                nameId="email"
                type="text"
                dataValueName="Email"

                label="Email"
              />
              <Input
                ref={password}
                className={classes.input}
                nameId="password"
                dataValueName="Password"

                type="password"
                label="Password"
              />
              <Input
                ref={verifyPSW}
                className={classes.input}
                nameId="confirm-password"
                type="password"
                dataValueName="Confirm Password"

                label="Confirm Password"
              />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <Modal
      changed={isLogin}
      activeModal={props.activeModal}
      setActiveModal={props.setActiveModal}
      isLogin={SideisLogin}
      isNotLogin={SideisNotLogin}
    />
  );
};

export default UserModal;
