import classes from "../css/DropDownLinks.module.css";

const DropDownLinks = (props) => {
  return (
    <ul
      className={`${classes.dropDownContent} ${classes.ul} ${
        props.open && classes.dropDownContentActive
      } ${props.className}`}
      style={props.open ? props.style : {}}
    >
      {props.children}
    </ul>
  );
};

export default DropDownLinks;
