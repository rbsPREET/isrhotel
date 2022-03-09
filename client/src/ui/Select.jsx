import { InputWrapper } from "./InputWrapper";
import classes from "../css/Select.module.css";
import { useEffect, useState } from "react";
import Transition from "react-transition-group/Transition";
const Select = (props) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const [chosenOption, setChosenOption] = useState({
    id: null,
    name: "",
  });

  const chosenOptionHandler = (e) => {
    setChosenOption((prev) => {
      return {
        name: e.target.textContent || e.target.value,
        id: e.target.id,
      };
    });
  };
  useEffect(() => {
    console.log(optionsOpen);
  }, [optionsOpen]);
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
        onClick={setOptionsOpen.bind(null, true)}
        className={`${classes.optionsWrapper} ${
          optionsOpen &&
          classes.optionItemOpen + " " + classes.optionsWrapperOpen
        }`}
      >
        <input
          value={chosenOption.name}
          onChange={chosenOptionHandler}
          className={`${classes.optionItem}`}
          type="text"
          placeholder={props.placeholder}
        />
        <Transition unmountOnExit in={optionsOpen} timeout={300}>
          {(state) =>
            props.options.map((option) => (
              <p onClick={chosenOptionHandler} id={option.id} key={option.id}>
                {option.name}
              </p>
            ))
          }
        </Transition>
      </div>
    </InputWrapper>
  );
};
export default Select;
