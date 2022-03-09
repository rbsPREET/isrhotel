import React from "react";
import classes from "../css/InputWrapper.module.css";
export const InputWrapper = React.forwardRef((props,ref) => {
  return (
    <div ref={ref} onClick={props.onClick} className={`${classes.wrapper} ${props.mainDiv} ${props.customWidth}`}>
      <div className={classes.flex}>
        {props.icon}
        <div className={classes.wrapper}>{props.children}</div>
      </div>
    </div>
  );
});
