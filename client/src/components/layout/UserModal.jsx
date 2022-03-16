import Modal from "../../ui/Modal";
import classes from "../../css/layout/UserModal.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeUser, loginHandler as loginUser } from "../../store/user";
import Input from "../../ui/Input";

const UserModal = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const distpach = useDispatch();

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
        email: "admi1n@admin.com",
        password: "admin",
      })
    );
  };
  const SideisLogin = (
    <>
      <div className={classes.modalContentL}>
        Doesn't have an account?
        <span className={classes.checkStatus}>register now</span>
      </div>
      <div className={classes.modalContentR}>
        <div>
          <h1 className={classes.formTitle}>LOGIN</h1>
          <div>
            <form
              method="POST"
              onSubmit={loginHandler}
              className={classes.formContent}
            >
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
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  const SideisNotLogin = (
    <>
      <div className={classes.modalContentL}>
        Already a User?
        <span className={classes.checkStatus} onClick={registerHandler}>
          Login
        </span>
      </div>
      <div className={classes.modalContentR}>
        <div>
          <h1 className={classes.formTitle}>REGISTER</h1>
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
              <button>Login</button>
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
