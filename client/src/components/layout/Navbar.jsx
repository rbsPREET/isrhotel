import classes from "../../css/layout/Navbar.module.css";
import { KeyboardArrowDown } from "@material-ui/icons";
import DropDownWrapper from "../../ui/DropDownWrapper";
import { useEffect, useState } from "react";
import DropDownLinks from "../../ui/DropDownLinks";
import LiNavLink from "../../ui/LiNavLink";
import Transition from "react-transition-group/Transition";
import UserModal from "./UserModal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkIfLoggedIn, logoutHandler } from "../../store/user";

const Navbar = () => {
  const state = useSelector((state) => state.user);

  const [isOpenDropDown, setIsOpen] = useState({
    browse: false,
    pages: false,
    home: false,
  });
  const dispatch = useDispatch();

  // Login/Register Modal State
  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => {
    setActiveModal(true);
  };

  const lougoutHandler = () => {
    dispatch(logoutHandler({ id: state._id }));
  };
  const openDropDown = (isOpen, dropName) => {
    const open = JSON.parse(`{"${dropName.toLowerCase()}":${isOpen}}`);
    setIsOpen((prev) => {
      return {
        ...prev,
        ...open,
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(
      () => dispatch(checkIfLoggedIn(state._id)),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, state._id]);

  const browseIsOpen = (
    <Transition unmountOnExit in={isOpenDropDown.browse} timeout={150}>
      {(state) => (
        <DropDownLinks
          open={state === "entered" && isOpenDropDown.browse}
          style={{ height: `${45 * 3 + 20}px` }}
        >
          <LiNavLink to="/" linkName="Test" />
          <LiNavLink to="/" linkName="Testt" />
          <LiNavLink to="/" linkName="Testttt" />
        </DropDownLinks>
      )}
    </Transition>
  );

  const homeIsOpen = (
    <Transition unmountOnExit in={isOpenDropDown.home} timeout={150}>
      {(state) => (
        <DropDownLinks
          open={state === "entered" && isOpenDropDown.home}
          style={{ height: `${45 * 3 + 20}px` }}
        >
          <LiNavLink to="/" linkName="Test" />
          <LiNavLink to="/" linkName="Testt" />
          <LiNavLink to="/" linkName="Testttt" />
        </DropDownLinks>
      )}
    </Transition>
  );
  const pagesIsOpen = (
    <Transition unmountOnExit in={isOpenDropDown.pages} timeout={150}>
      {(state) => (
        <DropDownLinks
          open={state === "entered" && isOpenDropDown.pages}
          style={{ height: `${45 * 3 + 20}px` }}
        >
          <LiNavLink to="/" linkName="Test" />
          <LiNavLink to="/" linkName="Testt" />
          <LiNavLink to="/" linkName="Testttt" />
        </DropDownLinks>
      )}
    </Transition>
  );

  const modal = (
    <Transition unmountOnExit in={activeModal} timeout={150}>
      {(state) => (
        <UserModal
          activeModal={state === "entered" && activeModal}
          setActiveModal={setActiveModal}
        />
      )}
    </Transition>
  );
  return (
    <div className={classes.container}>
      {modal}
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>ISRHOTEL</h1>
          </Link>
          <ul style={{ marginBottom: "unset" }}>
            <DropDownWrapper
              openDropDown={openDropDown}
              name="Home"
              icon={<KeyboardArrowDown />}
            >
              {homeIsOpen}
            </DropDownWrapper>
            <DropDownWrapper
              openDropDown={openDropDown}
              name="Browse"
              icon={<KeyboardArrowDown />}
            >
              {browseIsOpen}
            </DropDownWrapper>

            <DropDownWrapper
              openDropDown={openDropDown}
              name="Pages"
              icon={<KeyboardArrowDown />}
            >
              {pagesIsOpen}
            </DropDownWrapper>

            <LiNavLink to="/" className={classes.menuItem} linkName="Contact" />
          </ul>
        </div>
        {/* Check if User is logged in to display Login/Register Modal / if logged in => display User Icon and Name*/}
        <div className={classes.right}>
          <button
            onClick={state.isLoggedIn ? lougoutHandler : openModal}
            className={classes.loginButton}
          >
            {state.isLoggedIn ? `Heyo User` : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
