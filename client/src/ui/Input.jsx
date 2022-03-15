import React, {useRef, useState } from "react";
import Transition from "react-transition-group/Transition";
import classes from "../css/ui/Input.module.css";
import FlexColumn from "./FlexColumn";
import { InputWrapper } from "./InputWrapper";

const Input = (props) => {
  const [inputClicked, setInputClicked] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const input = useRef();

  const inputChangeHandler = (e) => {
    if (input.current.value.length > 0 || e.target === input.current) {
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

  const selectHandler = (e) => {
    setOpenSelect(!openSelect);
    if (e.target.textContent.length > 0) {
      setInputClicked(true);
      setOpenSelect(false);
    } else if (e.target === input.current) {
      setInputClicked(true);
    } else {
      setInputClicked(false);
      openSelect && setOpenSelect(false);
    }
  };

  const selectBlurHandler = () => {
    openSelect && setOpenSelect(false);
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
          <div
            onBlur={selectBlurHandler}
            onClick={selectHandler}
            className={classes.divInput}
          >
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
              onClick={props.getData}
              onTouchEnd={(e) => console.log(e.target)}
              ref={input}
              onChange={props.onChangeOption}
              placeholder={props.placeholder}
              type="text"
              name={props.nameId}
              className={`${props.className} ${classes.input}`}
              id={props.nameId}
              onBlur={resetLabelHandler}
              value={props.value}
            />
            <Transition
              timeout={400}
              mountOnEnter
              unmountOnExit
              in={openSelect}
            >
              {(state) => (
                <ul
                  className={`${classes.ul} ${
                    state === "entered" && classes.show
                  }`}
                >
                  {props.data.map((data) => (
                    <li
                      onClick={props.onClickOption}
                      key={data.id}
                      value={data.name}
                      className={classes.li}
                    >
                      {data.name}
                    </li>
                  ))}
                </ul>
              )}
            </Transition>
          </div>
        )}
      </FlexColumn>
    </InputWrapper>
  );
};

export default Input;
