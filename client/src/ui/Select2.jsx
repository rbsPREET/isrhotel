import { InputWrapper } from "./InputWrapper";
import classes from "../css/ui/Select.module.css";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Input from "./Input";
import Transition from "react-transition-group/Transition";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
const Select2 = (props) => {
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
   <Fragment>
      <Input
      label="Location"
      icon={<EventAvailableIcon />}
      positionIcon="left"
      type="text"
      nameId="location"
    ></Input>
      <Input
      label="Location"
      icon={<EventAvailableIcon />}
      positionIcon="left"
      type="select"
      nameId="location"
    ></Input>
   </Fragment>
  );
};
export default Select2;
