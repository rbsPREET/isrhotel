import classes from "../css/Navbar.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DropDownWrapper from "../ui/DropDownWrapper";
import { useState } from "react";
import DropDownLinks from "../ui/DropDownLinks";
import LiNavLink from "../ui/LiNavLink";
import { Modal } from "./Modal";
import Transition from "react-transition-group/Transition";

const Navbar = () => {
  const [isOpenDropDown, setIsOpen] = useState({
    browse: false,
    pages: false,
    home: false,
  });
  
    // Login/Register Modal State
  const [activeModal, setActiveModal] = useState(false)

  const openModal = () => {
    setActiveModal(prev => !prev)
  }
  
  const openDropDown = (isOpen, dropName) => {
    const open = JSON.parse(`{"${dropName.toLowerCase()}":${isOpen}}`);
    setIsOpen((prev) => {
      return {
        ...prev,
        ...open,
      };
    });
  };

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

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h1>ISRHOTEL</h1>
          <ul style={{ marginBottom: "unset" }}>
            <DropDownWrapper
              openDropDown={openDropDown}
              name="Home"
              icon={<KeyboardArrowDownIcon />}
            >
              {homeIsOpen}
            </DropDownWrapper>
            <DropDownWrapper
              openDropDown={openDropDown}
              name="Browse"
              icon={<KeyboardArrowDownIcon />}
            >
              {browseIsOpen}
            </DropDownWrapper>

            <DropDownWrapper
              openDropDown={openDropDown}
              name="Pages"
              icon={<KeyboardArrowDownIcon />}
            >
              {pagesIsOpen}
            </DropDownWrapper>

            <LiNavLink to="/" className={classes.menuItem} linkName="Contact" />
          </ul>
        </div>
        {/* Check if User is logged in to display Login/Register Modal / if logged in => display User Icon and Name*/}
        <div className={classes.right}>
          <button onClick={openModal} className={classes.loginButton}>Login</button>
          <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
