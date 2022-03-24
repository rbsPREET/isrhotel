// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { InputWrapper } from "./InputWrapper";
import React, { forwardRef, useState } from "react";

const InputRangeDates = forwardRef((props,ref) => {
  const [dates, setDates] = useState([new Date(), new Date()]);

  const datesHandler = (value) => {
    setDates(value);
    props.dataValue(props.dataValueName,value);
  };
  return (
    <InputWrapper icon={props.icon} mainDiv={props.mainDiv}>
      <label htmlFor={props.nameId}>{props.label}</label>
      <DateRangePicker
      ref={ref}
        size={props.size || "md"}
        block={props.block || true}
        onChange={datesHandler}
        appearance={props.appearance || "subtle"}
        value={dates}
        format={props.formant || "dd-MM-yyyy"}
      />
    </InputWrapper>
  );
});

export default InputRangeDates;
