import classes from "../css/ui/flexPositions.module.css";

const FlexColumn = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className={`${props.className ? props.className : ""} ${
        props.center ? classes.centerColumn : ""
      } ${props.fullSize ? classes.fullSize : ""}`}    >
      {props.children}
    </div>
  );
};

export default FlexColumn;
