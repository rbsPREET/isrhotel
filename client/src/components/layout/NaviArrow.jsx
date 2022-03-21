import React from "react";
import classes from "../../css/layout/NaviArrow.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const NaviArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  return (
    <div className={classes.container} onClick={scrollToTop}>
      <KeyboardArrowUpIcon />
    </div>
  );
};

export default NaviArrow;
