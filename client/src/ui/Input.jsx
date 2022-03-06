import classes from '../css/Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.nameId}>{props.label}</label>
      <input
      placeholder={props.placeholder}
        type={props.tpye}
        name={props.nameId}
        className={props.classes}
        id={props.nameId}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
