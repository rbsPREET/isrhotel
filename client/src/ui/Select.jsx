import { InputWrapper } from "./InputWrapper";
import classes from "../css/ui/Select.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Transition from "react-transition-group/Transition";
const Select = (props) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [options, setOptionsData] = useState([]);
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

  const changeOptionHandler = (e) => {
    const availableCountries = options.filter((option) =>
      option.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptionsData(availableCountries);
    setChosenOption((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  const chosenOptionHandler = (e) => {
    setChosenOption((prev) => {
      return {
        name: e.target.textContent || e.target.value,
        id: e.target.id,
      };
    });
  };

  const escPress = useCallback(
    (e) => {
      if (e.key === "Escape" && optionsOpen) {
        setOptionsOpen(!optionsOpen);
      }
    },
    [setOptionsOpen, optionsOpen]
  ); // Close Modal when click "ESC" key

  useEffect(() => {
    setOptionsData(props.options);
    document.addEventListener("keydown", escPress);
    return () => document.removeEventListener("keydown", escPress);
  }, [escPress, setOptionsData, props.options]);

  return (
    <InputWrapper
      onClick={closeOptionsHandler}
      customWidth={classes.customWidth}
      icon={props.icon}
      className={classes.defaultInputWMT}
      mainDiv={` ${props.mainDiv} ${
        optionsOpen && classes.WrapperOptionItemOpen
      } `}
    >
      {props.label && (
        <span className={classes.span} defaultValue={props.label}>
          {props.label}
        </span>
      )}
      <div onClick={setOptionsOpen.bind(null, true)}>
        <input
          ref={(node) => {
            select.current = node;
          }}
          value={chosenOption.name}
          onChange={changeOptionHandler}
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
              {options.map((option) => (
                <p
                  onClick={chosenOptionHandler}
                  id={option.name}
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
