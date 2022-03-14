import React, { useRef, useState } from "react";
import classes from "../css/ui/Input.module.css";
import FlexColumn from "./FlexColumn";
import { InputWrapper } from "./InputWrapper";

const Input = (props) => {
  const [inputClicked, setInputClicked] = useState(false);
  const input = useRef();

  const inputChangeHandler = (e) => {
    if (input.current.value.length > 0) {
      setInputClicked(true);
    } else if (e.target === input.current) {
      setInputClicked(true);
    } else {
      setInputClicked(false);
    }
    // props.onChange(e.target.value, props.nameId);
  };
  const resetLabelHandler = () => {
    if (input.current.value.length > 0) {
      setInputClicked(true);
    } else {
      setInputClicked(false);
    }
  };

  return (
    <InputWrapper
      positionIcon={props.positionIcon}
      icon={props.icon}
      mainDiv={props.mainDiv}
    >
      <FlexColumn className={classes.relative} customWidth={100}>
        {(props.type === "text" ||
          props.type === "number" ||
          props.type === "email" ||
          props.type === "tel" ||
          props.type === "password") && (
          <div onClick={inputChangeHandler} className={classes.divInput}>
            {props.label && (
              <label
                htmlFor={props.nameId}
                className={`${props.className} ${classes.label} ${
                  inputClicked && classes.inputClicked
                }`}
              >
                {props.label}
              </label>
            )}
            <input
              onTouchEnd={(e) => console.log(e.target)}
              ref={input}
              placeholder={props.placeholder}
              type={props.type}
              name={props.nameId}
              className={`${props.className} ${classes.input}`}
              id={props.nameId}
              onChange={inputChangeHandler}
              onBlur={resetLabelHandler}
              value={props.value}
            />
          </div>
        )}
        {props.type === "select" && (
          <div onClick={inputChangeHandler} className={classes.divInput}>
            {props.label && (
              <label
                htmlFor={props.nameId}
                className={`${props.className} ${classes.label} ${
                  inputClicked && classes.inputClicked
                }`}
              >
                {props.label}
              </label>
            )}
            <select
              name={props.nameId}
              className={`${props.className} ${classes.select}`}
              id={props.nameId}
              onChange={inputChangeHandler}
              onBlur={props.onBlur}
              value={props.value}
            >
              <option>{props.placeholder}</option>
              {/* {props.data.map((data) => (
                <option
                  data-chosen={data.name === props.value}
                  value={data.name}
                  id={data.id}
                  key={data.id}
                >
                  {data.name}
                </option>
              ))} */}
            </select>
          </div>
        )}
      </FlexColumn>
    </InputWrapper>
  );
};

export default Input;
