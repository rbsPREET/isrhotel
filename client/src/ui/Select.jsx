import { InputWrapper } from "./InputWrapper";
import classes from "../css/Select.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Transition from "react-transition-group/Transition";
const Select = (props) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const select = useRef();
  const [chosenOption, setChosenOption] = useState({
    id: null,
    name: "",
  });

  const closeOptionsHandler = (e) => {
    if (document.body !== e.target) {
      setOptionsOpen(!optionsOpen);
    }
  };

  const chosenOptionHandler = (e) => {
    setChosenOption((prev) => {
      return {
        name: e.target.textContent || e.target.value,
        id: e.target.id,
      };
    });
  };

  const InputWrapperClasses = ` ${props.mainDiv} ${
    optionsOpen && classes.WrapperOptionItemOpen
  } `;

  const escPress = useCallback(
    (e) => {
      if (e.key === "Escape" && optionsOpen) {
        setOptionsOpen(!optionsOpen);
      }
    },
    [setOptionsOpen, optionsOpen]
  ); // Close Modal when click "ESC" key

  useEffect(() => {
    document.addEventListener("keydown", escPress);
    return () => document.removeEventListener("keydown", escPress);
  }, [escPress]);

  return (
    <InputWrapper
      onClick={closeOptionsHandler}
      customWidth={classes.customWidth}
      icon={props.icon}
      className={classes.defaultInputWMT}
      mainDiv={InputWrapperClasses}
    >
      <span className={classes.span} defaultValue={props.label}>
        {props.label}
      </span>
      <div onClick={setOptionsOpen.bind(null, true)}>
        <input
          ref={(node) => {
            select.current = node;
          }}
          value={chosenOption.name}
          onChange={chosenOptionHandler}
          type="text"
          className={classes.input}
          placeholder={props.placeholder}
        />
      </div>

      <Transition mountOnEnter unmountOnExit in={optionsOpen} timeout={500}>
        {(state) => {
          return (
            <div
              className={`${classes.optionsWrapper} ${
                state === "entered" && classes.optionItemOpen
              }`}
            >
              {props.options.map((option) => (
                <p
                  onClick={chosenOptionHandler}
                  id={option.name.split(" ").join("-").toLowerCase()}
                  key={option.id}
                >
                  {option.name}
                </p>
              ))}
            </div>
          );
        }}
      </Transition>
    </InputWrapper>
  );
};
export default Select;
