import classes from "../css/Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.nameId}>{props.label}</label>
      {props.type === ("text" || "number" || "email" || "tel") && (
        <input
          placeholder={props.placeholder}
          type={props.tpye}
          name={props.nameId}
          className={props.classes}
          id={props.nameId}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      )}
      {props.type === "select" && (
        <select
          name={props.nameId}
          className={props.classes}
          id={props.nameId}
          onChange={props.onChange}
          onBlur={props.onBlur}
        >
          {props.data.map((data) => (
            <option value={data.name} id={data.id} key={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Input;
