import React, { useState } from "react";
import classes from "../css/DropDownWrapper.module.css";
const DropDownLink = (props) => {
  const [isDroped, setDropDown] = useState(false);

  const toggle = (name) => {
    setDropDown(!isDroped);
    props.openDropDown(!isDroped, name);
  };
  return (
    <li
      ref={props.ref}
      onMouseEnter={toggle.bind(null,props.name)}
      onMouseLeave={toggle.bind(null,props.name)}
      className={`${props.className ? props.className : ''} ${classes.menuItem}`}
    >
      {props.name}
      {props.icon}
      {props.children}
    </li>
  );
};

export default DropDownLink;
