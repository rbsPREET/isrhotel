import classes from "../css/ui/flexPositions.module.css";
const FlexRow = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: `${props.customWidth && props.customWidth}%`,
      }}
      className={`${props.className ? props.className : ""} ${
        props.center ? classes.center : ""
      } ${props.fullSize ? classes.fullSize : ""} ${
        props.wrap ? classes.wrap : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default FlexRow;
