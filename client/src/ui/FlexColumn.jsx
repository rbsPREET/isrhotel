const FlexColumn = (props) => {
  return <div style={{ display: "flex", flexDirection: "column" }} className={props.className}>{props.children}</div>;
};

export default FlexColumn;