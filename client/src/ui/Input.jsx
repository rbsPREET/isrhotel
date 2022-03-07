import "../css/Input.module.css";
import { InputWrapper } from "./InputWrapper";

const Input = (props) => {
  return (
    <InputWrapper mainDiv={props.mainDiv}>
      <label htmlFor={props.nameId}>{props.label}</label>
      {props.type === ("text" || "number" || "email" || "tel") && (
        <input
          placeholder={props.placeholder}
          type={props.tpye}
          name={props.nameId}
          className={props.className}
          id={props.nameId}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      )}
      {props.type === "select" && (
        <select
          name={props.nameId}
          className={props.className}
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
    </InputWrapper>
  );
};

export default Input;
