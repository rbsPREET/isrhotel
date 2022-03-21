import classes from "../css/ui/flexPositions.module.css";

const FlexColumn = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: `${props.customWidth && props.customWidth}%`,
      }}
      className={`${props.className ? props.className : ""} ${
        props.center ? classes.centerColumn : ""
      } ${
        props.verticalCenter ? classes.justifyCenter : ""
      } ${props.fullSize ? classes.fullSize : ""}`}
    >
      {props.children}
    </div>
  );
};

export default FlexColumn;
