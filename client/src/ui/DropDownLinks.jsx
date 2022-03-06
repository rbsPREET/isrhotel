import classes from "../css/DropDownLinks.module.css";

const DropDownLinks = (props) => (
  <div className={classes.dropDownContent}>
    {props.children}
  </div>
);

export default DropDownLinks;
