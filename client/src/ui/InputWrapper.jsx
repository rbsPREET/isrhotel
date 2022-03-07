import classes from "../css/InputWrapper.module.css";
export const InputWrapper = (props) => {
  return (
    <div className={`${classes.input} ${props.mainDiv}`}>
      {props.icon}
      {props.children}
    </div>
  );
};
