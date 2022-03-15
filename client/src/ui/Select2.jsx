import { useEffect, useState } from "react";
import Input from "./Input";
import useHttp from "../api/http";
const Select2 = (props) => {
  const { sendRequest, data } = useHttp(props.http, true);
  // const [optionsOpen, setOptionsOpen] = useState(false);
  const [options, setOptionsData] = useState([]);
  // const select = useRef();
  const [chosenOption, setChosenOption] = useState({
    id: null,
    name: "",
  });

  // const closeOptionsHandler = (e) => {
  //   if (document.body !== e.target) {
  //     setOptionsOpen(!optionsOpen);
  //   }
  // };

  const changeOptionHandler = (e) => {
    const availableCountries = data.filter((option) =>
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
  const getData = () => {
    setOptionsData(data);
  };
  // const escPress = useCallback(
  //   (e) => {
  //     if (e.key === "Escape" && optionsOpen) {
  //       setOptionsOpen(!optionsOpen);
  //     }
  //   },
  //   [setOptionsOpen, optionsOpen]
  // ); // Close Modal when click "ESC" key

  useEffect(() => {
    sendRequest();
    // document.addEventListener("keydown", escPress);
    // return () => document.removeEventListener("keydown", escPress);
  }, [sendRequest]);

  return (
    <Input
      customWidth={props.customWidth}
      inBox={props.inBox}
      getData={getData}
      value={chosenOption.name}
      onChangeOption={changeOptionHandler}
      onClickOption={chosenOptionHandler}
      data={options}
      label={props.label}
      icon={props.icon}
      positionIcon={props.positionIcon}
      type="select"
      noBorders={props.noBorders}
      nameId={props.nameId}
    />
  );
};
export default Select2;
