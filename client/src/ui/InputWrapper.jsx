import React from "react";
import FlexRow from "./FlexRow";
export const InputWrapper = React.forwardRef((props, ref) => {
  return (
    // <div
    //   ref={ref}
    //   onClick={props.onClick}
    //   className={`${classes.wrapper} ${props.mainDiv} ${props.customWidth}`}
    // >
    <FlexRow className={props.className} centerColumn>
        {props.positionIcon !== "right" && props.icon}
          {props.children}
        {props.positionIcon === "right" && props.icon}
      </FlexRow>
    // </div>
  );
});
