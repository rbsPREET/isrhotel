import React from "react";
import classes from "../css/ui/InputWrapper.module.css";
import FlexColumn from "./FlexColumn";
import FlexRow from "./FlexRow";
export const InputWrapper = React.forwardRef((props, ref) => {
  return (
    // <div
    //   ref={ref}
    //   onClick={props.onClick}
    //   className={`${classes.wrapper} ${props.mainDiv} ${props.customWidth}`}
    // >
    <FlexRow centerColumn>
        {props.positionIcon !== "right" && props.icon}
          {props.children}
        {props.positionIcon === "right" && props.icon}
      </FlexRow>
    // </div>
  );
});
