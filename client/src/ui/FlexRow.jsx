import classes from "../css/ui/flexPositions.module.css";
const FlexRow = (props) => {
  const propsClasses = `${props.className ? props.className : ""} ${
    props.center ? classes.justifyCenter : ""
  }${props.fullSize ? classes.fullSize : ""} ${
    props.wrap ? classes.wrap : ""
  } ${props.centerColumn ? classes.centerColumn : ""}${
    props.allCenter ? classes.justifyCenter + " " + classes.centerColumn : ""
  }${props.justifyBetween ? classes.justifyBetween : ""}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: `${props.customWidth && props.customWidth}%`,
      }}
      className={propsClasses}
    >
      {props.children}
    </div>
  );
};

export default FlexRow;
