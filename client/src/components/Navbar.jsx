import classes from "../css/Navbar.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DropDownWrapper from "../ui/DropDownWrapper";
import { useState } from "react";
import DropDownLinks from "../ui/DropDownLinks";
const Navbar = () => {
  const [isOpenDropDown, setIsOpen] = useState({
    home: false,
    browse: false,
    pages: false,
  });

  const openDropDown = (isOpen, dropName) => {
    let name;
    for (name in isOpenDropDown) {
      if (name === dropName.toLowerCase()) {
        const open = JSON.parse(`{"${name}":${isOpen}}`);
        setIsOpen((prev) => {
          return {
            ...prev,
            ...open,
          };
        });
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h1>ISRHOTEL</h1> {/* Will change to a real Logo */}
          <DropDownWrapper openDropDown={openDropDown} name="Home">
            <KeyboardArrowDownIcon />
          </DropDownWrapper>
          <DropDownWrapper openDropDown={openDropDown} name="Browse">
            <KeyboardArrowDownIcon />
            {isOpenDropDown.browse && (
              <DropDownLinks>
                {/* Change to Router later */}
                <span>Test</span>
                <span>Testt</span>
                <span>Testtt</span>
              </DropDownLinks>
            )}
          </DropDownWrapper>
          <DropDownWrapper openDropDown={openDropDown} name="Pages">
            <KeyboardArrowDownIcon />
          </DropDownWrapper>
          <div className={classes.menuItem}>Contact</div>
        </div>
        <div className={classes.right}>
          <button className={classes.hostButton}>Become a Host</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
