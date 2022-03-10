const FlexRow = (props) => {
  return <div style={{ display: "flex", flexDirection: "row" }} className={props.className}>{props.children}</div>;
};

export default FlexRow;