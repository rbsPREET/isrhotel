import classes from "../css/DropDownLinks.module.css";

const DropDownLinks = (props) => {
  return (
    <ul
      className={`${classes.dropDownContent} ${classes.dropDownContentActive}`}
    >
      {props.children}
    </ul>
  );
};

export default DropDownLinks;
