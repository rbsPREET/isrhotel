import classes from "../css/Navbar.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DropDownWrapper from "../ui/DropDownWrapper";
import { useState } from "react";
import DropDownLinks from "../ui/DropDownLinks";
import LiNavLink from "../ui/LiNavLink";
import { Modal } from "./Modal";

const Navbar = () => {
  // Login/Register Modal State
  const [activeModal, setActiveModal] = useState(false)
  const openModal = () => {
    setActiveModal(prev => !prev)
  }

  const [isOpenDropDown, setIsOpen] = useState({});
  const openDropDown = (isOpen, dropName) => {
    const open = JSON.parse(`{"${dropName.toLowerCase()}":${isOpen}}`);
    setIsOpen((prev) => {
      return {
        ...prev,
        ...open,
      };
    });
  };

  const browseIsOpen = isOpenDropDown.browse && (
    <DropDownLinks>
      <LiNavLink to="/" linkName="Test" />
      <LiNavLink to="/" linkName="Testt" />
      <LiNavLink to="/" linkName="Testttt" />
    </DropDownLinks>
  );

  const homeIsOpen = isOpenDropDown.home && (
    <DropDownLinks>
      <LiNavLink to="/" linkName="Test" />
      <LiNavLink to="/" linkName="Testt" />
      <LiNavLink to="/" linkName="Testttt" />
    </DropDownLinks>
  );
  const pagesIsOpen = isOpenDropDown.pages && (
    <DropDownLinks>
      <LiNavLink to="/" linkName="Test" />
      <LiNavLink to="/" linkName="Testt" />
      <LiNavLink to="/" linkName="Testttt" />
    </DropDownLinks>
  );

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h1>ISRHOTEL</h1>

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
