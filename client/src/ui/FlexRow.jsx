import classes from "../css/ui/flexPositions.module.css";
const FlexRow = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row" }}
      className={`${props.className} ${props.center && classes.center}`}
    >
      {props.children}
    </div>
  );
};

export default FlexRow;
