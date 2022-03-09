import { InputWrapper } from "./InputWrapper";
import classes from "../css/Select.module.css";
import { useEffect, useState } from "react";
const Select = (props) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const [chosenOption, setChosenOption] = useState({});

  const chosenOptionHandler = (e) => {
    setChosenOption((prev) => {
      return {
        name: e.target.textContent,
        id: e.target.id,
      };
    });
  };
  useEffect(() => {
    console.log(chosenOption);
  }, [chosenOption]);
  return (
    <InputWrapper
      customWidth={classes.customWidth}
      icon={props.icon}
      mainDiv={`${props.mainDiv} ${
        optionsOpen && classes.WrapperOptionItemOpen
      }`}
    >
      <span defaultValue={props.label}>{props.label}</span>
      <div
        className={`${classes.optionsWrapper} ${
          optionsOpen && classes.optionItemOpen
        }`}
      >
        <input
          value={chosenOption.name || ''}
          onClick={setOptionsOpen}
          className={`${classes.optionItem}`}
          type="text"
          placeholder={props.placeholder}
        />
        {props.options.map((option) => (
          <p onClick={chosenOptionHandler} id={option.id} key={option.id}>
            {option.name}
          </p>
        ))}
      </div>
    </InputWrapper>
  );
};
export default Select;
