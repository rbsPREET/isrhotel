import React, { Fragment } from "react";
import "../css/Input.module.css";
import { InputWrapper } from "./InputWrapper";

const Input = (props) => {
  const inputChangeHandler = (value) => {
    props.onChange(value.target.value, props.nameId);
  };

  return (
    <Fragment>
      <InputWrapper icon={props.icon} mainDiv={props.mainDiv}>
        <label htmlFor={props.nameId}>{props.label}</label>
        {(props.type === "text" ||
          props.type === "number" ||
          props.type === "email" ||
          props.type === "tel" ||
          props.type === "password") && (
          <input
            placeholder={props.placeholder}
            type={props.type}
            name={props.nameId}
            className={props.className}
            id={props.nameId}
            onChange={inputChangeHandler}
            onBlur={props.onBlur}
            value={props.value}
          />
        )}
        {props.type === "select" && (
          <select
            name={props.nameId}
            className={props.className}
            id={props.nameId}
            onChange={inputChangeHandler}
            onBlur={props.onBlur}
            value={props.value}
          >
            <option>{props.placeholder}</option>
            {props.data.map((data) => (
              <option
                data-chosen={data.name === props.value}
                value={data.name}
                id={data.id}
                key={data.id}
              >
                {data.name}
              </option>
            ))}
          </select>
        )}
      </InputWrapper>
    </Fragment>
  );
};

export default Input;
