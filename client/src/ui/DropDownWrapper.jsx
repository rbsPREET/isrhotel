import React, { useState } from "react";
import classes from "../css/DropDownWrapper.module.css";
const DropDownLink = React.forwardRef((props, ref) => {
  const [isDroped, setDropDown] = useState(false);

  const toggle = () => {
    setDropDown(!isDroped);
    props.openDropDown(!isDroped, props.name);
  };
  return (
    <div
      ref={props.ref}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      className={props.className + " " + classes.menuItem}
    >
      {props.name}
      {props.children}
    </div>
  );
});

export default DropDownLink;
