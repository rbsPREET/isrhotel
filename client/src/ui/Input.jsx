import React, { forwardRef, useRef, useState } from "react";
import Transition from "react-transition-group/Transition";
import classes from "../css/ui/Input.module.css";
import FlexColumn from "./FlexColumn";
import { InputWrapper } from "./InputWrapper";

const Input = forwardRef((props,ref) => {
  const [inputClicked, setInputClicked] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);

  const inputChangeHandler = (e) => {
    if (ref.current.value.length > 0 || e.target === ref.current) {
      setInputClicked(true);
    } else {
      setInputClicked(false);
    }

    // props.onChange(e.target.value, props.nameId);
  };
  const resetLabelHandler = () => {
    if (ref.current.value.length > 0) {
      setInputClicked(true);
    } else {
      setInputClicked(false);
    }
  };

  const selectHandler = (e) => {
    setOpenSelect(true);
    if (e.target.textContent.length > 0) {
      setInputClicked(true);
      setOpenSelect(false);
    } else if (e.target === ref.current) {
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
      className={classes.padding}
      positionIcon={props.positionIcon}
      icon={props.icon}
      mainDiv={props.mainDiv}
    >
      <FlexColumn className={classes.relative} center customWidth={100}>
        {(props.type === "text" ||
          props.type === "number" ||
          props.type === "email" ||
          props.type === "tel" ||
          props.type === "password") && (
            <div onClick={inputChangeHandler} className={`${classes.divInput}`}>
              {props.label && (
                <label
                  htmlFor={props.nameId}
                  className={`${props.className} ${classes.label} ${inputClicked && classes.inputClicked
                    }`}
                >
                  {props.label}
                </label>
              )}
              <input
                onTouchEnd={(e) => console.log(e.target)}
                ref={ref}
                type={props.type}
                name={props.nameId}
                className={`${props.className} ${classes.input}`}
                id={props.nameId}
                onChange={(e) => {
                  inputChangeHandler(e);
                  props.dataValue && props.dataValue(props.dataValueName,e.target.value);
                }}
                onBlur={resetLabelHandler}
                value={props.value}
              />
            </div>
          )}
        {props.type === "select" && (
          <div
            style={{ width: props.customWidth }}
            onBlur={selectBlurHandler}
            onClick={selectHandler}
            className={`${props.inBox ? classes.divInputInBox : classes.divInput
              } ${props.noBorders && classes.noBorders}`}
          >
            {props.label && (
              <label
                htmlFor={props.nameId}
                className={`${props.className} ${classes.label} ${inputClicked && classes.inputClicked
                  }`}
              >
                {props.label}
              </label>
            )}
            <input
              onClick={props.getData}
              onTouchEnd={(e) => console.log(e.target)}
              ref={ref}
              onChange={props.onChangeOption}
              placeholder={props.placeholder}
              type="text"
              name={props.nameId}
              className={`${props.className} ${classes.input} ${props.noBorders && classes.noBordersLabel
                }`}
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
                  className={`${classes.ul} ${state === "entered" && classes.show
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
});

export default Input;
