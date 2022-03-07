// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { InputWrapper } from "./InputWrapper";

export const InputRangeDates = (props) => {
  return (
    <InputWrapper mainDiv={props.mainDiv}>
      <label htmlFor={props.nameId}>{props.label}</label>
      <DateRangePicker
        size={props.size || "md"}
        block={props.block || true}
        onChange={props.onChange}
        appearance={props.appearance || "subtle"}
        value={props.dates}
        format={props.formant || "dd-MM-yyyy"}
      />
      {/* <DateRangePicker showSelectionPreview={false} ranges={dates} onChange={calenderChangedHandler} /> */}
      {/* <DateRangePicker
              calendarClassName="dor-test"
              className="test-dor"
              clearIcon={null}
              format="dd-MM-y"
              onChange={calenderChangedHandler}
              value={dates}
            /> */}
    </InputWrapper>
  );
};
