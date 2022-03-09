import classes from "../css/InputWrapper.module.css";
export const InputWrapper = (props) => {
  return (
    <div className={`${classes.wrapper} ${props.mainDiv} ${props.customWidth}`}>
      <div className={classes.flex}>
        {props.icon}
        <div className={classes.wrapper}>{props.children}</div>
      </div>
    </div>
  );
};
