import { forwardRef, useEffect, useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
const Select2 = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [options, setOptionsData] = useState([]);
  const [chosenOption, setChosenOption] = useState({
    id: null,
    name: "",
  });

  const changeOptionHandler = (e) => {
    const availableOptions = props.state.filter((option) =>
      option.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptionsData(availableOptions);
    setChosenOption((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
    props.data(chosenOption);
  };

  const chosenOptionHandler = (e) => {
    setChosenOption((prev) => {
      return {
        name: e.target.textContent,
        id: e.target.id,
      };
    });
  };
  const getData = () => {
    setOptionsData(props.state);
  };

  useEffect(() => {
    dispatch(props.data);
    props.dataValue(props.dataValueName, chosenOption.name);
  }, [dispatch, chosenOption, props.dataValueName]);

  return (
    <Input
      ref={ref}
      mainDiv={props.mainDiv}
      customWidth={props.customWidth}
      inBox={props.inBox}
      className={props.className}
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
});
export default Select2;
