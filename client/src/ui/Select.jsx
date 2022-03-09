import { InputWrapper } from "./InputWrapper";
import classes from "../css/Select.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Transition from "react-transition-group/Transition";
const Select = (props) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [transitionState, setTransitionState] = useState("");
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
  const aboveTheInput = `${classes.optionsWrapper} ${
    optionsOpen && classes.optionItemOpen + " " + classes.optionsWrapperOpen
  }  ${transitionState === "exiting" && classes.optionWrapperGoingToBeClose}`;

  const InputWrapperClasses = `
  ${props.mainDiv} ${optionsOpen && classes.WrapperOptionItemOpen} 
   ${
     transitionState === "exiting" && classes.WrapperOptionItemGoingToBeClose
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

  useEffect(() => {
    console.log(optionsOpen);
  }, [optionsOpen]);
  return (
    <InputWrapper
      onClick={closeOptionsHandler}
      customWidth={classes.customWidth}
      icon={props.icon}
      className={classes.defaultInputWidth}
      mainDiv={InputWrapperClasses}
    >
      <span className={classes.span} defaultValue={props.label}>
        {props.label}
      </span>
      <div onClick={setOptionsOpen.bind(null, true)} className={aboveTheInput}>
        <input
          ref={(node) => {
            select.current = node;
          }}
          value={chosenOption.name}
          onChange={chosenOptionHandler}
          className={`${classes.optionItem}`}
          type="text"
          placeholder={props.placeholder}
        />
        <Transition mountOnEnter unmountOnExit in={optionsOpen} timeout={500}>
          {(state) => {
            setTransitionState(state);
            return props.options.map((option) => (
              <p onClick={chosenOptionHandler} id={option.id} key={option.id}>
                {option.name}
              </p>
            ));
          }}
        </Transition>
      </div>
    </InputWrapper>
  );
};
export default Select;
