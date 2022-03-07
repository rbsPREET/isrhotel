import React, { useState } from "react";
import classes from "../css/DropDownWrapper.module.css";
const DropDownLink = (props) => {
  const [isDroped, setDropDown] = useState(false);

  const toggle = () => {
    setDropDown(!isDroped);
    props.openDropDown(!isDroped, props.name);
  };
  return (
    <li
      ref={props.ref}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      className={`${props.className ? props.className : ''} ${classes.menuItem}`}
    >
      {props.name}
      {props.icon}
      {props.children}
    </li>
  );
};

export default DropDownLink;
