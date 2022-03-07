import classes from "../css/Navbar.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DropDownWrapper from "../ui/DropDownWrapper";
import { useState } from "react";
import DropDownLinks from "../ui/DropDownLinks";
import LiLink from "../ui/LiLink";
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

  const browseIsOpen = isOpenDropDown.browse && (
    <DropDownLinks>
      <LiLink to="/" linkName="Test" />
      <LiLink to="/" linkName="Testt" />
      <LiLink to="/" linkName="Testttt" />
    </DropDownLinks>
  );

  const homeIsOpen = isOpenDropDown.home && (
    <DropDownLinks>
      <LiLink to="/" linkName="Test" />
      <LiLink to="/" linkName="Testt" />
      <LiLink to="/" linkName="Testttt" />
    </DropDownLinks>
  );
  const pagesIsOpen = isOpenDropDown.pages && (
    <DropDownLinks>
      <LiLink to="/" linkName="Test" />
      <LiLink to="/" linkName="Testt" />
      <LiLink to="/" linkName="Testttt" />
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

          <LiLink to="/" className={classes.menuItem} linkName="Contact" />
        </div>
        <div className={classes.right}>
          <button className={classes.hostButton}>Become a Host</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
